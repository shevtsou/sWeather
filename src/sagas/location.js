import { put } from 'redux-saga/effects'

import {
  GET_CURRENT_LOCATION_SUCCESS,
  GET_CURRENT_LOCATION_FAIL,
} from '../constants/actions'

export function * retrieveCurrentLocation () {
  try {
    if (!navigator.geolocation) {
      throw Error('Geolocation is not supported by your browser')
    }
    const response = yield new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })

    yield put({
      type: GET_CURRENT_LOCATION_SUCCESS,
      payload: {
        latitude: Math.round(response.coords.latitude),
        longitude: Math.round(response.coords.longitude),
      },
    })
  } catch (e) {
    yield put({ type: GET_CURRENT_LOCATION_FAIL, payload: e })
  }
}
