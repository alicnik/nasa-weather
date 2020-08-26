import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export const Recent = ({ recentWeather, tempUnitFahrenheit, timeUnitSols, convertToCelcius, convertToEarthDays }) => {

  if (Object.keys(recentWeather).length < 2) return <h2>No recentWeather</h2>
  
  return (
    <section id="recent">
      <Carousel showThumbs={false}>
        {Object.keys(recentWeather).reverse().map(sol => {
          return <div key={sol} className="recent-averages-container">
            <h4>{timeUnitSols ? `Sol ${sol}` : convertToEarthDays(sol)}</h4>
            <div className="recent-reading">
              <h6>Temperature</h6>
              <p>{tempUnitFahrenheit ? 
                `${recentWeather[sol].AT.av.toFixed(1)}ºF` : 
                `${convertToCelcius(recentWeather[sol].AT.av).toFixed(1)}ºC`}
              </p>
            </div>
            <div className="recent-reading">
              <h6>Wind Speed</h6>
              <p>{recentWeather[sol].HWS.av.toFixed(2)} m/s</p>
            </div>
            <div className="recent-reading">
              <h6>Pressure</h6>
              <p>{recentWeather[sol].PRE.av.toFixed(2)} Pa</p>
            </div>
          </div>
        })}
      </Carousel>
    </section>
  )
}