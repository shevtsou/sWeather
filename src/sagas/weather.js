import {
  METAWEATHER_API,
  WEATHERBIT_API,
  WEATHER_STACK_API_ACCESS_KEY,
  FORECAST_DAYS,
  CORS_PROXY_URL,
} from '../constants/whether-api'
import { put } from 'redux-saga/effects'

import { GET_WEATHER_SUCCESS, GET_WEATHER_FAIL } from '../constants/actions'
import { formatDate, getDayOfWeek } from '../utils/dateUtils'
import moment from 'moment'

export function * retrieveWeather (action) {
  let forecasts = []
  const { location } = action.payload

  try {
    if (action.payload.weatherApi === 'METAWEATHER_API') {
      forecasts = yield * retrieveWeatherFromMetaweather(location)
    }
    // const response = yield fetch(`http://api.weatherstack.com/current?access_key=${WEATHER_STACK_API_ACCESS_KEY}&query='${location}'&forecast_days=${FORECAST_DAYS}`).then(response => response.json())
    // stats.push({
    //   dayOfWeek: getDayOfWeek(Date.now()),
    //   date: formatDate(Date.now()),
    //   weatherDescription: response.current.weather_descriptions[0],
    //   temperature: response.current.temperature,
    //   precipitation: response.current.precip,
    //   humidity: response.current.humidity,
    //   wind: response.current.wind_speed,
    // })
    // if (response.forecast) {
    //   for (const forecast in response.forecast) {
    //     stats.push({
    //       dayOfWeek: getDayOfWeek(forecast.date),
    //       date: formatDate(forecast.date),
    //       weatherDescription: forecast.current.weather_descriptions[0],
    //       temperature: forecast.current.temperature,
    //       precipitation: forecast.current.precip,
    //       humidity: forecast.current.humidity,
    //       wind: forecast.current.wind_speed,
    //     })
    //   }
    // }
    yield put({ type: GET_WEATHER_SUCCESS, payload: forecasts })
  } catch (e) {
    yield put({ type: GET_WEATHER_FAIL, payload: e })
  }
}
function * retrieveWeatherFromMetaweather (location) {
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
      temperature: dayForecast.min_temp,
      precipitation: dayForecast.visibility,
      humidity: dayForecast.humidity,
      wind: dayForecast.wind_speed,
    })
    currentDate.add(1, 'day')
  }
  return forecasts
}
