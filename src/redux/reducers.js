import { ADD_TRAIN, UPDATE_TRAIN, UPDATE_TRAIN_FILTER } from "./action-types";

const initialState = {
  trains: [],
  filterString: ""
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

  return state;
}

export default rootReducer;
