import { 
  ADD_TRAIN, 
  UPDATE_TRAIN, 
  UPDATE_TRAIN_FILTER,
  UPDATE_MAP_ZOOM,
  UPDATE_MAP_CENTER,
} from "./action-types";
import { cities } from "../config/cities";

const initialState = {
  trains: [],
  filterString: "",
  mapZoom: 5,
  mapCenter: cities.find((city) => city.id === "helsinki" ).coordinates,
}

function rootReducer(state = initialState, action) {

  if (action.type === ADD_TRAIN) {
    console.log(ADD_TRAIN)
    return Object.assign({}, state, {
      trains: state.trains.concat(action.payload)
    });
  }

  if (action.type === UPDATE_TRAIN) {
    console.log(UPDATE_TRAIN)
    const trains = state.trains.map((train) => {
      if (train.trainNumber === action.payload.trainNumber) {
        return action.payload
      } else {
        return train;
      }
    });

    return Object.assign({}, state, { 
      trains: trains
    });
  }
  
  if (action.type === UPDATE_TRAIN_FILTER) {
    console.log(UPDATE_TRAIN_FILTER)
    return Object.assign({}, state, {
      filterString: action.filterString
    });
  }

  if (action.type === UPDATE_MAP_ZOOM) {
    console.log(UPDATE_MAP_ZOOM)
    return Object.assign({}, state, {
      mapZoom: action.mapZoom
    });
  }

  if (action.type === UPDATE_MAP_CENTER) {
    console.log(UPDATE_MAP_CENTER)
    return Object.assign({}, state, {
      mapCenter: action.mapCenter
    });
  }

  return state;
}

export default rootReducer;
