import { put } from 'redux-saga/effects'

import {
  GET_WEATHER,
  SAVE_DATA_TO_STORAGE,
  CHANGE_WEATHER_API_SUCCESS,
  CHANGE_WEATHER_API_FAIL,
} from '../constants/actions'

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
