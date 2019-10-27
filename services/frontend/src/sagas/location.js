import { put, call } from 'redux-saga/effects'
import { getCurrentLocation, findLocationByCoordinates } from './api/location-api'

import {
  GET_CURRENT_LOCATION_SUCCESS,
  GET_CURRENT_LOCATION_FAIL,
  CHANGE_LOCATION_SUCCESS,
  CHANGE_LOCATION_FAIL,
  GET_WEATHER,
  SAVE_DATA_TO_STORAGE,
} from '../constants/actions'

export function * retrieveCurrentLocation () {
  try {
    const response = yield call(getCurrentLocation)
    const { latitude, longitude } = response.coords
    const geoCodeResponse = yield call(findLocationByCoordinates, latitude, longitude)
    const cityName = geoCodeResponse.results[0].address_components[0].long_name
    const countryName = geoCodeResponse.results[0].address_components.slice(
      -1
    )[0].long_name

    yield put({
      type: GET_CURRENT_LOCATION_SUCCESS,
      payload: {
        city: cityName,
        country: countryName,
        latitude: latitude,
        longitude: longitude,
      },
    })
    yield put({
      type: GET_WEATHER,
    })
    yield put({
      type: SAVE_DATA_TO_STORAGE,
    })
  } catch (e) {
    yield put({ type: GET_CURRENT_LOCATION_FAIL, payload: e })
  }
}

export function * changeLocation (action) {
  const { query } = action.payload
  try {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${process.env.REACT_APP_OPENCAGEDATE_API_KEY}`
    const locationResponse = yield fetch(url).then(response => response.json())
    const [location] = locationResponse.results
    if (!location) {
      yield put({
        type: CHANGE_LOCATION_SUCCESS,
        payload: {
          city: null,
          country: null,
          latitude: null,
          longitude: null,
        },
      })
    } else {
      yield put({
        type: CHANGE_LOCATION_SUCCESS,
        payload: {
          city:
            location.components.city ||
            location.components.county ||
            location.components.state,
          country: location.components.country,
          latitude: location.geometry.lat,
          longitude: location.geometry.lng,
        },
      })
    }

    yield put({
      type: GET_WEATHER,
    })
    yield put({
      type: SAVE_DATA_TO_STORAGE,
    })
  } catch (e) {
    yield put({ type: CHANGE_LOCATION_FAIL, payload: e })
  }
}
