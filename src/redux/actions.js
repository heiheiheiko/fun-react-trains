import { 
  ADD_TRAIN, 
  UPDATE_TRAIN, 
  UPDATE_TRAIN_FILTER,
  UPDATE_MAP_ZOOM,
  UPDATE_MAP_CENTER,
} from "./action-types";

export const addTrain = (payload) => {
  return { type: ADD_TRAIN, payload }
}

export const updateTrain = (payload) => {
  return { type: UPDATE_TRAIN, payload }
}

export const updateTrainFilter = (filterString) => {
  return { type: UPDATE_TRAIN_FILTER, filterString }
}

export const updateMapZoom = (mapZoom) => {
  return { type: UPDATE_MAP_ZOOM, mapZoom }
}

export const updateMapCenter = (mapCenter) => {
  return { type: UPDATE_MAP_CENTER, mapCenter }
}
