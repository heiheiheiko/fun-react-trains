import reducers from './reducers';
import { 
  ADD_TRAIN, 
  UPDATE_TRAIN, 
  UPDATE_TRAIN_FILTER,
  UPDATE_MAP_ZOOM,
  UPDATE_MAP_CENTER,
} from "./action-types";
import initialState from "./initialState";

describe('INITIAL_STATE', () => {
  it('is correct', () => {
    const action = { type: 'DUMMY_ACTION' };

    expect(reducers(undefined, action)).toEqual(initialState);
  });
});

describe('ADD_TRAIN', () => {
  it('returns the correct state', () => {
    const payload = { trainNumber: 7 }
    const action = { type: ADD_TRAIN, payload: payload };
 
    const expectedState = Object.assign({}, initialState, { 
      trains: [payload] 
    });

    expect(reducers(undefined, action)).toEqual(expectedState);
  });
});

describe('UPDATE_TRAIN', () => {
  it('returns the correct state', () => {
    const currentState = Object.assign({}, initialState, { 
      trains: [ { trainNumber: 7, location: [0, 20] } ]
    });
    const payload = { trainNumber: 7, location: [7, 7] }
    const action = { type: UPDATE_TRAIN, payload: payload };
    
    const expectedState = Object.assign({}, initialState, { 
      trains: [payload] 
    });

    expect(reducers(currentState, action)).toEqual(expectedState);
  });
});

describe('UPDATE_TRAIN_FILTER', () => {
  it('returns the correct state', () => {
    const trainFilterString = "7";
    const action = { type: UPDATE_TRAIN_FILTER, trainFilterString: trainFilterString };
    
    const expectedState = Object.assign({}, initialState, { 
      trainFilterString: trainFilterString
    });

    expect(reducers(undefined, action)).toEqual(expectedState);
  });
});

describe('UPDATE_MAP_ZOOM', () => {
  it('returns the correct state', () => {
    const mapZoom = 10;
    const action = { type: UPDATE_MAP_ZOOM, mapZoom: mapZoom };
    
    const expectedState = Object.assign({}, initialState, { 
      mapZoom: mapZoom
    });

    expect(reducers(undefined, action)).toEqual(expectedState);
  });
});

describe('UPDATE_MAP_CENTER', () => {
  it('returns the correct state', () => {
    const mapCenter = [0, 20];
    const action = { type: UPDATE_MAP_CENTER, mapCenter: mapCenter };
    
    const expectedState = Object.assign({}, initialState, { 
      mapCenter: mapCenter
    });

    expect(reducers(undefined, action)).toEqual(expectedState);
  });
});
