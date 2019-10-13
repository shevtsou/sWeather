import {
  GET_WEATHER,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_FAIL,
  CHANGE_WEATHER_API,
  CHANGE_WEATHER_API_FAIL,
  CHANGE_WEATHER_API_SUCCESS,
} from '../constants/actions'
import { METAWEATHER_API } from '../constants'

const initialState = {
  weather: [],
  weatherApi: METAWEATHER_API,
  isFetching: false,
  error: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        isFetching: true,
      }
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.payload,
        isFetching: false,
        error: '',
      }
    case GET_WEATHER_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case CHANGE_WEATHER_API:
      return {
        ...state,
        isFetching: true,
      }
    case CHANGE_WEATHER_API_SUCCESS:
      return {
        ...state,
        weatherApi: action.payload.weatherApi,
        isFetching: false,
      }
    case CHANGE_WEATHER_API_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}
