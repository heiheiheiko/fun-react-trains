import configureStore from 'redux-mock-store';
import { 
  ADD_TRAIN, 
  UPDATE_TRAIN, 
  UPDATE_TRAIN_FILTER,
  UPDATE_MAP_ZOOM,
  UPDATE_MAP_CENTER,
} from "./action-types";

import { 
  addTrain, 
  updateTrain, 
  updateTrainFilter, 
  updateMapZoom, 
  updateMapCenter 
} from './actions';

const mockStore = configureStore();
const store = mockStore();

beforeEach(() => {
  store.clearActions();
});

describe('addTrain', () => {
  it('Dispatches the correct action and payload', () => {
    const payload = { trainNumber: 1 }
    const expectedActions = [
      {
        'payload': payload,
        'type': ADD_TRAIN,
      },
    ];

    store.dispatch(addTrain(payload));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('updateTrain', () => {
  it('Dispatches the correct action and payload', () => {
    const payload = { trainNumber: 1 }
    const expectedActions = [
      {
        'payload': payload,
        'type': UPDATE_TRAIN,
      },
    ];

    store.dispatch(updateTrain(payload));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('updateTrainFilter', () => {
  it('Dispatches the correct action and payload', () => {
    const trainFilterString = "7";
    const expectedActions = [
      {
        'trainFilterString': trainFilterString,
        'type': UPDATE_TRAIN_FILTER,
      },
    ];

    store.dispatch(updateTrainFilter(trainFilterString));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('updateMapZoom', () => {
  it('Dispatches the correct action and payload', () => {
    const mapZoom = 10;
    const expectedActions = [
      {
        'mapZoom': mapZoom,
        'type': UPDATE_MAP_ZOOM,
      },
    ];

    store.dispatch(updateMapZoom(mapZoom));
    expect(store.getActions()).toEqual(expectedActions);
  });
});

describe('updateMapCenter', () => {
  it('Dispatches the correct action and payload', () => {
    const mapCenter = [0, 20];
    const expectedActions = [
      {
        'mapCenter': mapCenter,
        'type': UPDATE_MAP_CENTER,
      },
    ];

    store.dispatch(updateMapCenter(mapCenter));
    expect(store.getActions()).toEqual(expectedActions);
  });
});