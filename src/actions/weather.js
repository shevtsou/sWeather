import { GET_WEATHER } from '../constants/actions'

export function getWeather (location) {
  return {
    type: GET_WEATHER,
    payload: { location },
  }
}
