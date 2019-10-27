export const getCurrentLocation = () => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation is not supported by your browser'));
    }
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

export const findLocationByCoordinates = (latitude, longitude) => {
  const url = `https://maps.googleapis.com/maps/api/geocode/json?result_type=locality&latlng=${latitude},${longitude}&key=${process.env.REACT_APP_GEOCODING_API_ACCESS_KEY}`;
  return fetch(url).then(response => response.json());
};
