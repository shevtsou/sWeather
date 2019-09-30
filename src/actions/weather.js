import { GET_WEATHER } from '../constants/actions'

export function getWeather (locationQuery) {
  return {
    type: GET_WEATHER,
    payload: { locationQuery },
  }
}
