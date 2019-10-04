import {
  WEATHER_STACK_API_ACCESS_KEY,
  FORECAST_DAYS,
} from '../constants/whether-api'
import { put, call } from 'redux-saga/effects'

import { GET_WEATHER_SUCCESS, GET_WEATHER_FAIL } from '../constants/actions'
import { formatDate, getDayOfWeek } from '../utils/dateUtils'


export function * retrieveWeather (action) {
  const stats = []
  const { location } = action.payload
  try {
    const response = yield fetch(`http://api.weatherstack.com/current?access_key=${WEATHER_STACK_API_ACCESS_KEY}&query='${location}'&forecast_days=${FORECAST_DAYS}`).then(response => response.json())
    stats.push({
      dayOfWeek: getDayOfWeek(Date.now()),
      date: formatDate(Date.now()),
      weatherDescription: response.current.weather_descriptions[0],
      temperature: response.current.temperature,
      precipitation: response.current.precip,
      humidity: response.current.humidity,
      wind: response.current.wind_speed,
    })
    if (response.forecast) {
      for (const forecast in response.forecast) {
        stats.push({
          dayOfWeek: getDayOfWeek(forecast.date),
          date: formatDate(forecast.date),
          weatherDescription: forecast.current.weather_descriptions[0],
          temperature: forecast.current.temperature,
          precipitation: forecast.current.precip,
          humidity: forecast.current.humidity,
          wind: forecast.current.wind_speed,
        })
      }
    }
    yield put({ type: GET_WEATHER_SUCCESS, payload: stats })
  } catch (e) {
    yield put({ type: GET_WEATHER_FAIL, payload: e })
  }
}
