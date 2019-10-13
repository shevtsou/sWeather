import {
    CORS_PROXY_URL,
} from '@/constants/weather-api'

export function getWeatherByCoordinates (latitude, longitude) {
    return fetch(
        `${CORS_PROXY_URL}/${process.env.REACT_APP_WEATHERBIT_API_URL}/forecast/daily?`+
        `lat=${latitude}&` +
        `lon=${longitude}&` +
        `key=${process.env.REACT_APP_WEATHERBIT_API_KEY}`
    ).then(response => response.json())
}