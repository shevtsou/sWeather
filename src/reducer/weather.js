import { GET_WEATHER, GET_WEATHER_SUCCESS, GET_WEATHER_FAIL } from '../constants/actions'
import { METAWEATHER_API, WEATHERBIT_API } from '../constants'

const initialState = {
  weather: [],
  weatherApi: METAWEATHER_API,
  isFetching: false,
  error: '',
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER:
      action.payload = {
        ...action.payload,
        weatherApi: state.weatherApi,
      }
      return {
        ...state,
        isFetching: true,
      }
    case GET_WEATHER_SUCCESS:
      return Object.assign({}, state, {
        weather: action.payload,
        isFetching: false,
        error: '',
      })
    case GET_WEATHER_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}
