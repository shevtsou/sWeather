import { put, call } from 'redux-saga/effects'
import { GET_WEATHER } from '@/constants'
import { WEATHER_API_ACCESS_KEY } from '@/constants/whether-api'

function fetchWeatherData(locationQuery) {
  const url = `http://api.weatherstack.com/current?access_key=${WEATHER_API_ACCESS_KEY}&query=${locationQuery}`
  return fetch(url)
}

export function * retrieveWeather (action) {
  let { locationQuery } = action.payload
  
}