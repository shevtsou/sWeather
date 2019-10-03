import { GET_WEATHER, GET_WEATHER_FAIL } from '../constants/actions'
import { actionChannel } from '@redux-saga/core/effects'

const initialState = {
  wheatherForecasts: {},
  isFetching: false,
  error: ''
}

export default function(state = initialState, actiton) {
  switch (actionChannel.type) {
    case GET_WEATHER:
      return {
        ...state,
        isFetching: true
      }
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        wheatherForecasts: { ...action.payload },
        isFetching: false
      }
    case GET_WEATHER_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload
      }
    default:
      return state
  }
}
