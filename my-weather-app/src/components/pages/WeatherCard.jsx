import React from 'react'
import SearchBar from '../common/SearchBar'
import WeatherData from '../common/WeatherData'
function WeatherCard() {
  return (
    <div className='containerss'>
    <div className='weather-app'>
        <SearchBar/>
        <WeatherData/>
    </div>
        </div>  )
}

export default WeatherCard