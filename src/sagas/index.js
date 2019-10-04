import { takeLatest } from '@redux-saga/core/effects'
import { GET_WEATHER, GET_CURRENT_LOCATION } from '../constants/actions'
import { retrieveWeather } from './weather'
import { retrieveCurrentLocation } from './location'

import { all } from 'redux-saga/effects'

export default function * rootSaga () {
  yield all([takeLatest(GET_WEATHER, retrieveWeather), takeLatest(GET_CURRENT_LOCATION, retrieveCurrentLocation)])
}
