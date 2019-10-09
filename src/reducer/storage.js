import {
  SAVE_DATA_TO_STORAGE,
  LOAD_DATA_FROM_STORAGE
} from '../constants/actions'

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
      location: state.location.location,
      weather: {
        forecasts: state.weather.weather,
        weatherApi: state.weather.weatherApi,
      }
    })
  )
}

function loadData(state) {
  try {
    console.log(state);
    
    const retrievedData = JSON.parse(localStorage.getItem('sWeatherData'))
    if (retrievedData === null) {
      return state
    }
    return {
      location: {
        location: retrievedData.location,
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
