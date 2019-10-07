import { GET_CURRENT_LOCATION, CHANGE_LOCATION } from '../constants/actions'

export function getLocation () {
  return {
    type: GET_CURRENT_LOCATION,
  }
}

export function changeLocation (query) {
  return {
    type: CHANGE_LOCATION,
    payload: { query },
  }
}
