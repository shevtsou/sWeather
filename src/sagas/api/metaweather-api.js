import {
    CORS_PROXY_URL,
} from '@/constants/weather-api'

export function getWoeidByCoordinates (latitude, longitude) {
    return fetch(
        `${CORS_PROXY_URL}/${process.env.REACT_APP_METAWEATHER_API_URL}/location/search?` +
        `lattlong=${latitude},${longitude}`
    ).then(response => response.json())
    .then(response => {
        const [first] = response
        const { woeid } = first
        return woeid
    })
}
export function getWeatherByDate (woeid, year, month, day) {
    return fetch(
        `${CORS_PROXY_URL}/${process.env.REACT_APP_METAWEATHER_API_URL}/location/${woeid}/${year}/${month}/${day}/`
    ).then(response => response.json())
    .then(response => {
        const [dayForecast] = response
        return dayForecast
    })
}