import React from 'react'
import { LatestModule } from './LatestModule.jsx'

export const Latest = ({ latestWeather, tempUnitFahrenheit, timeUnitSols, convertToCelcius, convertToEarthDays }) => {

  const solValue = Object.keys(latestWeather)[0]
  const temperatureProps = { tempUnitFahrenheit, convertToCelcius }

  if (!solValue) return null

  return <section id="latest">
    <header>
      <h2 className="day">{timeUnitSols ? `Sol ${solValue}` : convertToEarthDays(solValue)}</h2>
      <h2 className="season">({latestWeather[solValue].Season})</h2>
    </header>
    <div className="latest-column">
      <LatestModule  
        type='temperature'  
        data={latestWeather[solValue].AT}
        {...temperatureProps}
      />
      <LatestModule  
        type='wind speed'  
        data={latestWeather[solValue].HWS}
        {...temperatureProps}
      />
      <LatestModule  
        type='pressure'  
        data={latestWeather[solValue].PRE}
        {...temperatureProps}
      />
    </div>
  </section>
}
