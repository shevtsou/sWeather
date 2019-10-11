import { expectSaga } from 'redux-saga-test-plan'
import { retrieveCurrentLocation as getCurrentLocationSaga } from '../sagas/location'
import {
  getCurrentLocation,
  findLocationByCoordinates,
} from '../sagas/api/location-api'
import {
  GET_CURRENT_LOCATION_SUCCESS,
  GET_CURRENT_LOCATION,
} from '../constants/index'

it('getCurrentLocationSaga has no regressions', () => {
  return expectSaga(getCurrentLocationSaga)
    .provide({
      call (effect, next) {
        if (effect.fn === getCurrentLocation) {
          return { coords: { latitude: 99, longitude: 66 } }
        }
        if (effect.fn === findLocationByCoordinates) {
          return {
            results: [
              {
                address_components: [
                  {
                    long_name: 'TestCity',
                  },
                  {
                    long_name: 'TestCountry',
                  },
                ],
              },
            ],
          }
        }
        return next()
      },
    })
    .put({
      type: GET_CURRENT_LOCATION_SUCCESS,
      payload: {
        city: 'TestCity',
        country: 'TestCountry',
        latitude: 99,
        longitude: 66,
      },
    })
    .dispatch({
      type: GET_CURRENT_LOCATION,
    })
    .run()
})
