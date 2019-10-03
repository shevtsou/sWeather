import {
  WEATHER_STACK_API_ACCESS_KEY,
  FORECAST_DAYS
} from '../constants/whether-api'

import { put, call } from 'redux-saga/effects'

import { GET_WEATHER_FAIL } from '../constants/actions'

const weatherURL = fetch(weatherURL)
  .then(response => response.json())
  .then(response => console.log(response))

function fetchWeatherData(location) {
  const url = `http://api.weatherstack.com/current?
  access_key=${WEATHER_STACK_API_ACCESS_KEY}
  &query='${location}'
  &forecast_days = ${FORECAST_DAYS}`

  return fetch(url)
}

export function* retrieveWeather(aciton) {
  let stats = []
  let { location } = action.location
  try {
    let response = yield call(fetchWeatherData, location)
    stats.push({
      date: Date.now(),
      weatherDescription: response.current.weather_descriptions[0],
      temperature: response.current.temperature,
      precipitation: response.current.precip,
      humidity: response.current.humidity,
      wind: response.current.wind_speed
    })
    for (const forecast in response.forecast) {
      stats.push({
        date: forecast.date,
        weatherDescription: forecast.current.weather_descriptions[0],
        temperature: forecast.current.temperature,
        precipitation: forecast.current.precip,
        humidity: forecast.current.humidity,
        wind: forecast.current.wind_speed
      })
      yield put({ type: GET_WEATHER_SUCCUESS, payload: stats })
    }
  } catch (e) {
    yield put({ type: GET_WEATHER_FAIL, payload: e })
  }
}
