import React from 'react'
import WeatherBlock from '@/components/forms/weather-block'
import { Divider } from 'antd'
import { CLOUDY, SUNNY, RAINY, FOG } from '../../../constants/weather';

function randomElement (arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
function randomNumber (to, from = 0) {
  return Math.round(Math.random() * (to - from) + from);
}

function generateWeather () {
  const weatherDesc = [CLOUDY, SUNNY, RAINY, FOG]
  return {
    weatherDescription: randomElement(weatherDesc),
    temperature: randomNumber(-20, 30),
    precipitation: randomNumber(0, 100),
    humidity: randomNumber(0, 100),
    wind: randomNumber(0, 100)
  }
}

class WeatherList extends React.Component {
  state = [
    {
      dayOfWeek: 'Today',
      date: 'Sep 26',
      ...generateWeather(),
    },
    {
      dayOfWeek: 'Sun',
      date: 'Sep 27',
      ...generateWeather(),
    },
    {
      dayOfWeek: 'Sun',
      date: 'Sep 27',
      ...generateWeather(),
    },
    {
      dayOfWeek: 'Sun',
      date: 'Sep 27',
      ...generateWeather(),
    },
    {
      dayOfWeek: 'Sun',
      date: 'Sep 27',
      ...generateWeather(),
    },
    {
      dayOfWeek: 'Sun',
      date: 'Sep 27',
      ...generateWeather(),
    },
    {
      dayOfWeek: 'Sun',
      date: 'Sep 27',
      ...generateWeather(),
    },
  ]

  render () {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
        }}
      >
        {this.state.map(day => (
          <>
            <WeatherBlock key={day.date} {...day} />
            <Divider />
          </>
        ))}
      </div>
    )
  }
}

export default WeatherList
