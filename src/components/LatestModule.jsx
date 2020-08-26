import React from 'react'

export const LatestModule = ({ type, data, tempUnitFahrenheit, convertToCelcius }) => {

  if (!data) return <article>
    <h4>No {type} data available</h4>
  </article>
  
  let unitOfMeasurement

  switch (type) {
    case 'temperature':
      tempUnitFahrenheit ? unitOfMeasurement = 'ºF' : unitOfMeasurement = 'ºC'
      break
    case 'wind speed':
      unitOfMeasurement = 'm/s'
      break
    case 'pressure':
      unitOfMeasurement = 'Pa'
      break
  }

  if (type === 'temperature' && !tempUnitFahrenheit) {
    return <article>
      <h3>{type} <span>({unitOfMeasurement})</span></h3>
      <p>Min: {convertToCelcius(data.mn).toFixed(1)}</p>
      <p>Max: {convertToCelcius(data.mx).toFixed(1)}</p>
      <p>Avg: {convertToCelcius(data.av).toFixed(1)}</p>
    </article>
  }

  return (
    <article>
      <h3>{type} <span>({unitOfMeasurement})</span></h3>
      <div className="statistics">
        <p>Min: {data.mn.toFixed(1)}</p>
        <p>Max: {data.mx.toFixed(1)}</p>
        <p>Avg: {data.av.toFixed(1)}</p>
      </div>
    </article>
  )
}