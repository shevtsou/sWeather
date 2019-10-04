import { GET_CURRENT_LOCATION } from '../constants/actions'

export function getLocation () {
  return {
    type: GET_CURRENT_LOCATION,
  }
}
