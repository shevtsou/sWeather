import { put } from 'redux-saga/effects'

import {
  GET_CURRENT_LOCATION_SUCCESS,
  GET_CURRENT_LOCATION_FAIL,
} from '../constants/actions'
import { GEOCODING_API_ACCESS_KEY } from '../constants/whether-api'

export function * retrieveCurrentLocation () {
  try {
    if (!navigator.geolocation) {
      throw Error('Geolocation is not supported by your browser')
    }
    const response = yield new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject)
    })
    const { latitude, longitude } = response.coords
    const geoCodeResponse = yield fetch(`https://maps.googleapis.com/maps/api/geocode/json?result_type=locality&latlng=${response.coords.latitude},${longitude}&key=${GEOCODING_API_ACCESS_KEY}`).then(response => response.json())
    const cityName = geoCodeResponse.results[0].address_components[0].long_name
    const countryName = geoCodeResponse.results[0].address_components.slice(-1)[0].long_name
    yield put({
      type: GET_CURRENT_LOCATION_SUCCESS,
      payload: {
        city: cityName,
        country: countryName,
        latitude: latitude,
        longitude: longitude,
      },
    })
  } catch (e) {
    yield put({ type: GET_CURRENT_LOCATION_FAIL, payload: e })
  }
}
