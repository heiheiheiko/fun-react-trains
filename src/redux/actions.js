import { ADD_TRAIN, UPDATE_TRAIN } from "./action-types";
import store from "./store";

export const addTrain = (payload) => {
  return { type: ADD_TRAIN, payload }
}

export const updateTrain = (payload) => {
  return { type: UPDATE_TRAIN, payload }
}
