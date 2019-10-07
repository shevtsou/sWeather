import { put } from 'redux-saga/effects'

import {
  GET_CURRENT_LOCATION_SUCCESS,
  GET_CURRENT_LOCATION_FAIL,
  CHANGE_LOCATION_SUCCESS,
  CHANGE_LOCATION_FAIL,
  GET_CURRENT_LOCATION,
  GET_WEATHER
} from '../constants/actions'
import {
  GEOCODING_API_ACCESS_KEY,
  OPENCAGEDATE_API_KEY
} from '../constants/whether-api'

export function* retrieveCurrentLocation() {
  try {
    if (!navigator.geolocation) {
      throw Error('Geolocation is not supported by your browser')
    }
    const response = yield new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    const { latitude, longitude } = response.coords
    const geoCodeResponse = yield fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?result_type=locality&latlng=${response.coords.latitude},${longitude}&key=${GEOCODING_API_ACCESS_KEY}`
    ).then(response => response.json())
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
        longitude: longitude
      }
    })
  } catch (e) {
    yield put({ type: GET_CURRENT_LOCATION_FAIL, payload: e })
  }
}

export function* changeLocation(action) {
  const { query } = action.payload

  try {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${query}&key=${OPENCAGEDATE_API_KEY}`
    const locationResponse = yield fetch(url).then(response => response.json())
    const [location] = locationResponse.results
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
      }
    })

    yield put({
      type: GET_WEATHER,
    })
  } catch (e) {
    yield put({ type: CHANGE_LOCATION_FAIL, payload: e })
  }
}
