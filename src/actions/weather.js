import { GET_WEATHER, CHANGE_WEATHER_API } from '../constants/actions'

export function getWeather (location) {
  return {
    type: GET_WEATHER,
    payload: { location },
  }
}

export function changeWeatherApi (weatherApi) {
  return {
    type: CHANGE_WEATHER_API,
    payload: { weatherApi },
  }
}
