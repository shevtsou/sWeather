import { takeLatest } from '@redux-saga/core/effects'
import { GET_WEATHER } from '../constants/actions'
import { retrieveWeather } from './weather'
import { all } from 'redux-saga/effects'

export default function * rootSaga () {
  yield all([takeLatest(GET_WEATHER, retrieveWeather)])
}
