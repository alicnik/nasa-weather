import React from 'react'

export const SettingsWindow = ({ closeSettings,tempUnitFahrenheit, setTempUnitFahrenheit,timeUnitSols, setTimeUnitSols }) => {

  const setTempUnit = (e) => setTempUnitFahrenheit(!e.target.checked)
  const setTimeUnit = (e) => setTimeUnitSols(!e.target.checked)

  return <div id="settings-window">
    <div className="settings-modal">
      <button onClick={()=> closeSettings(false)}>X</button>
      <h3>Settings</h3>
      <label htmlFor="temperature">
        <input 
          onClick={setTempUnit} 
          defaultChecked={!tempUnitFahrenheit}
          type="checkbox" 
          name="temperature" 
          id="temperature"/>
        <span className="first-label-span">ºF</span>
        <span className="second-label-span">ºC</span>
      </label>
      <label htmlFor="time">
        <input 
          onClick={setTimeUnit} 
          type="checkbox" 
          defaultChecked={!timeUnitSols}
          name="time" 
          id="time"/>
        <span className="first-label-span">Sols</span>
        <span className="second-label-span">Days</span>
      </label>
    </div>
  </div>
}