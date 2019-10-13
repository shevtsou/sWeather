export function getCurrentLocation () {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'))
    }
    navigator.geolocation.getCurrentPosition(resolve, reject)
  })
}

export function findLocationByCoordinates (latitude, longitude) {
  return fetch(
    `${process.env.REACT_APP_GOOGLE_MAPS_API_URL}/geocode/json?result_type=locality` +
    `&latlng=${latitude},${longitude}` +
    `&key=${process.env.REACT_APP_GEOCODING_API_ACCESS_KEY}`
  ).then(response => response.json())
}

export function getLocationByQuery (query) {
  const url = `${process.env.REACT_APP_OPENCAGEDATA_API_URL}/json?q=${query}&key=${process.env.REACT_APP_OPENCAGEDATE_API_KEY}`
  return fetch(url).then(response => response.json())
}