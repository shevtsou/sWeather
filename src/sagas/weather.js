import {
  METAWEATHER_API,
  WEATHERBIT_API,
  WEATHERBIT_API_KEY,
  FORECAST_DAYS,
  CORS_PROXY_URL
} from '../constants/whether-api'
import { put } from 'redux-saga/effects'

import { GET_WEATHER_SUCCESS, GET_WEATHER_FAIL } from '../constants/actions'
import { formatDate, getDayOfWeek, toCelcius } from '../utils/utils'
import moment from 'moment'

export function* retrieveWeather(action) {
  let forecasts = []
  const { location } = action.payload

  try {
    if (action.payload.weatherApi === 'METAWEATHER_API') {
      forecasts = yield* retrieveWeatherFromMetaweather(location)
    } else if (action.payload.weatherApi === 'WEATHERBIT_API') {
      forecasts = yield* retrieveWeatherFromWeatherbit(location)
    }
    yield put({ type: GET_WEATHER_SUCCESS, payload: forecasts })
  } catch (e) {
    yield put({ type: GET_WEATHER_FAIL, payload: e })
  }
}

function* retrieveWeatherFromMetaweather(location) {
  const forecasts = []
  let url = `${CORS_PROXY_URL}/https://www.metaweather.com/api/location/search/?lattlong=${location.latitude},${location.longitude}`
  let response = yield fetch(url).then(response => response.json())
  const [first] = response
  const { woeid } = first
  const currentDate = moment()
  for (let i = 0; i < FORECAST_DAYS; i++) {
    const day = currentDate.date()
    const month = currentDate.month()
    const year = currentDate.year()
    url = `${CORS_PROXY_URL}/https://www.metaweather.com/api/location/${woeid}/${year}/${month}/${day}/`
    response = yield fetch(url).then(response => response.json())
    const [dayForecast] = response
    forecasts.push({
      dayOfWeek: getDayOfWeek(currentDate),
      date: formatDate(currentDate),
      weatherDescription: dayForecast.weather_state_name,
      temperature: toCelcius(dayForecast.min_temp),
      precipitation: dayForecast.visibility,
      humidity: dayForecast.humidity,
      wind: dayForecast.wind_speed
    })
    currentDate.add(1, 'day')
  }
  return forecasts
}

function* retrieveWeatherFromWeatherbit(location) {
  const forecasts = []

  const url = `${CORS_PROXY_URL}/https://api.weatherbit.io/v2.0/forecast/daily?lat=${location.latitude}&lon=${location.longitude}&key=${WEATHERBIT_API_KEY}`
  const response = yield fetch(url).then(response => response.json())

  const currentDate = moment()
  for (let i = 0; i < FORECAST_DAYS; i++) {
    const forecast = response.data[i]
    forecasts.push({
      dayOfWeek: getDayOfWeek(currentDate),
      date: formatDate(currentDate),
      weatherDescription: forecast.weather.description,
      temperature: toCelcius(forecast.temp),
      precipitation: forecast.precip,
      humidity: forecast.clouds,
      wind: forecast.wind_spd
    })
    currentDate.add(1, 'day')
  }

  return forecasts
}
