import { takeLatest } from '@redux-saga/core/effects'
import {
  GET_WEATHER,
  GET_CURRENT_LOCATION,
  CHANGE_LOCATION,
  CHANGE_WEATHER_API,
} from '../constants/actions'
import { retrieveWeather } from './weather'
import { retrieveCurrentLocation, changeLocation } from './location'

import { all } from 'redux-saga/effects'
import { changeWeatherApi } from './weatherApi'

export default function * rootSaga () {
  yield all([
    takeLatest(GET_WEATHER, retrieveWeather),
    takeLatest(GET_CURRENT_LOCATION, retrieveCurrentLocation),
    takeLatest(CHANGE_LOCATION, changeLocation),
    takeLatest(CHANGE_WEATHER_API, changeWeatherApi),
  ])
}
