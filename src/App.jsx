import React, { useState, useEffect } from 'react'
import { Latest } from './components/LatestWeather.jsx'
import { Recent } from './components/Recent.jsx'
import { SettingsWindow } from './components/SettingsWindow.jsx'
import { SettingsIcon } from './components/Icons.jsx'
import './styles/normalize.css'
import './styles/style.scss'

export const App = () => {
  const [latestWeather, setLatestWeather] = useState({})
  const [recentWeather, setRecentWeather] = useState({})
  const [tempUnitFahrenheit, setTempUnitFahrenheit] = useState(true)
  const [timeUnitSols, setTimeUnitSols] = useState(true)
  const [settingsStatus, setSettingsStatus] = useState(false)

  const convertToCelcius = (number) => (number - 32) / 9 / 5
  const convertToEarthDays = (sol) => {
    const landingDate = new Date('2018-12-12')
    const solOnEarth = landingDate.setDate(landingDate.getDate() + Number(sol))
    return new Date(solOnEarth).toLocaleDateString('en-GB',{ day: 'numeric', month: 'long' })
  }

  useEffect(() => {
    fetch('https://api.nasa.gov/insight_weather/?api_key=n7klfPQcAeCpjkUUZwfgCVdj0e7dR8c7aGMXEVPh&feedtype=json&ver=1.0')
      .then(response => response.json())
      .then(data => {
        const latestSol = Math.max(...data.sol_keys)
        const workingObj = {}
        for (const entry in data) {
          if (data.sol_keys.slice(0, -1).includes(entry)) {
            Object.assign(workingObj, { [entry]: data[entry] })
          }
        }
        setLatestWeather({ [latestSol]: data[latestSol] })
        setRecentWeather(workingObj)
      } 
      )
  }, [])

  return <>
  <header>
    <h1>MARS<br/>WEATHER</h1>
    <button onClick={() => setSettingsStatus(true)}><SettingsIcon/></button>
  </header>
  <main>
    <Latest 
      latestWeather={latestWeather} 
      convertToCelcius={convertToCelcius}
      convertToEarthDays={convertToEarthDays} 
      tempUnitFahrenheit={tempUnitFahrenheit} 
      timeUnitSols={timeUnitSols} 
    />
    {settingsStatus && 
    <SettingsWindow 
      closeSettings={setSettingsStatus}
      tempUnitFahrenheit={tempUnitFahrenheit}
      setTempUnitFahrenheit={setTempUnitFahrenheit}
      timeUnitSols={timeUnitSols}
      setTimeUnitSols={setTimeUnitSols}
    />}
  </main>
  {settingsStatus ||
  <aside>
    <Recent 
      recentWeather={recentWeather} 
      convertToCelcius={convertToCelcius}
      convertToEarthDays={convertToEarthDays} 
      tempUnitFahrenheit={tempUnitFahrenheit} 
      timeUnitSols={timeUnitSols} 
    />
  </aside>}
  </>
  
}