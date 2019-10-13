import {
  FORECAST_DAYS,
  METAWEATHER_API,
  WEATHERBIT_API,
} from '../constants/weather-api'
import {
  CHANGE_WEATHER_API_SUCCESS,
  CHANGE_WEATHER_API_FAIL,
  GET_WEATHER,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
  SAVE_DATA_TO_STORAGE,
} from '../constants/actions'

import * as metaweatherApi from './api/metaweather-api'
import * as weatherbitApi from './api/weatherbit-api'
import { call, put, select } from 'redux-saga/effects'
import { formatDate, getDayOfWeek } from '../utils/utils'
import moment from 'moment'

const getLocation = state => state.location
const getWeatherApi = state => state.weather.weatherApi

export function * retrieveWeather (action) {
  let forecasts = []
  const location = yield select(getLocation)
  if (!location) {
    yield put({ type: GET_WEATHER_SUCCESS, payload: {} })
    return
  }
  const weatherApi = yield select(getWeatherApi)
  try {
    if (weatherApi === METAWEATHER_API) {
      forecasts = yield * retrieveWeatherFromMetaweather(location)
    } else if (weatherApi === WEATHERBIT_API) {
      forecasts = yield * retrieveWeatherFromWeatherbit(location)
    }
    yield put({ type: GET_WEATHER_SUCCESS, payload: forecasts })
    yield put({
      type: SAVE_DATA_TO_STORAGE,
    })
  } catch (e) {
    yield put({ type: GET_WEATHER_FAIL, payload: e })
  }
}

function * retrieveWeatherFromMetaweather (location) {
  const forecasts = []
  const woeid = yield call(metaweatherApi.getWoeidByCoordinates, location.latitude, location.longitude)
  const currentDate = moment()
  for (let i = 0; i < FORECAST_DAYS; i++) {
    const day = currentDate.date()
    const month = currentDate.month()
    const year = currentDate.year()
    const dayForecast = yield call(metaweatherApi.getWeatherByDate, woeid, year, month, day)
    forecasts.push({
      date: formatDate(currentDate),
      dayOfWeek: getDayOfWeek(currentDate),
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

function * retrieveWeatherFromWeatherbit (location) {
  const forecasts = []
  const response = yield call(weatherbitApi.getWeatherByCoordinates, location.latitude, location.longitude)
  const currentDate = moment()
  for (let i = 0; i < FORECAST_DAYS; i++) {
    const forecast = response.data[i]
    forecasts.push({
      dayOfWeek: getDayOfWeek(currentDate),
      date: formatDate(currentDate),
      weatherDescription: forecast.weather.description,
      temperature: forecast.temp,
      precipitation: forecast.precip,
      humidity: forecast.clouds,
      wind: forecast.wind_spd,
    })
    currentDate.add(1, 'day')
  }

  return forecasts
}

export function * changeWeatherApi (action) {
  try {
    yield put({
      type: CHANGE_WEATHER_API_SUCCESS,
      payload: {
        weatherApi: action.payload.weatherApi,
      },
    })
    yield put({
      type: GET_WEATHER,
    })
    yield put({
      type: SAVE_DATA_TO_STORAGE,
    })
  } catch (e) {
    yield put({ type: CHANGE_WEATHER_API_FAIL, payload: e })
  }
}
