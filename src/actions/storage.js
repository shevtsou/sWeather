import {
  SAVE_DATA_TO_STORAGE,
  LOAD_DATA_FROM_STORAGE,
} from '../constants/actions'

export function saveDataToStorage () {
  return {
    type: SAVE_DATA_TO_STORAGE,
  }
}

export function loadDataFromStorage () {
  return {
    type: LOAD_DATA_FROM_STORAGE,
  }
}
