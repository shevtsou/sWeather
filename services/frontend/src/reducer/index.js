import weather from './weather'
import location from './location'
import { LOAD_DATA_FROM_STORAGE, SAVE_DATA_TO_STORAGE } from '../constants'
import reduceReducers from 'reduce-reducers'
import storage from './storage'
import { combineReducers } from 'redux'

const combinedReducer = combineReducers({
  weather,
  location,
})

function crossSliceReducer (state, action) {
  switch (action.type) {
    case SAVE_DATA_TO_STORAGE:
    case LOAD_DATA_FROM_STORAGE: {
      return storage(state, action)
    }
    default:
      return state
  }
}
export default reduceReducers(combinedReducer, crossSliceReducer)