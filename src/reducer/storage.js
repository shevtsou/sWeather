import {
  SAVE_DATA_TO_STORAGE,
  LOAD_DATA_FROM_STORAGE
} from '../constants/actions'
import moment from 'moment'
import { MAX_DATA_TIME_IN_HOURS } from '../constants/storage'

export default function(state, action) {
  switch (action.type) {
    case SAVE_DATA_TO_STORAGE:
      saveData(state)
      return state
    case LOAD_DATA_FROM_STORAGE:
      return loadData(state)
    default:
      return state
  }
}

function saveData(state) {
  localStorage.setItem(
    'sWeatherData',
    JSON.stringify({
      date: moment(),
      location: state.location,
      weather: {
        forecasts: state.weather.weather,
        weatherApi: state.weather.weatherApi,
      }
    })
  )
}

function loadData(state) {
  try {
    const retrievedData = JSON.parse(localStorage.getItem('sWeatherData'))
    const dataTime = moment.duration(moment().diff(retrievedData.date)).asHours()
    if (retrievedData === null || dataTime > MAX_DATA_TIME_IN_HOURS) {
      return state
    }
    return {
      location: {
        ...retrievedData.location,
        isFetching: false,
        error: ''
      },
      weather: {
        weather: retrievedData.weather.forecasts,
        weatherApi: retrievedData.weather.weatherApi,
        isFetching: false,
        error: ''
      }
    }
  } catch (e) {
    console.log('Error while loading data: ', e)
    return state
  }
}
