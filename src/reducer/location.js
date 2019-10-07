import {
  GET_CURRENT_LOCATION,
  GET_CURRENT_LOCATION_SUCCESS,
  GET_CURRENT_LOCATION_FAIL,
  CHANGE_LOCATION,
  CHANGE_LOCATION_SUCCESS,
  CHANGE_LOCATION_FAIL,
} from '../constants/actions'

const initialState = {
  location: {
    city: '',
    country: '',
    latitude: 0,
    longitude: 0,
  },
  isFetching: false,
  error: ''
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CURRENT_LOCATION:
      return {
        ...state,
        isFetching: true,
      }
    case GET_CURRENT_LOCATION_SUCCESS:
      return {
        ...state,
        location: { ...action.payload },
        isFetching: true,
      }
    case GET_CURRENT_LOCATION_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    case CHANGE_LOCATION:
      return {
        ...state,
        isFetching: true,
      }
    case CHANGE_LOCATION_SUCCESS:
      return {
        ...state,
        location: { ...action.payload },
        isFetching: false,
      }
    case CHANGE_LOCATION_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      }
    default:
      return state
  }
}
