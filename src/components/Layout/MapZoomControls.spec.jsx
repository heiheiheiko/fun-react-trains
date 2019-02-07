import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import renderer from 'react-test-renderer'

import MapZoomControls from './MapZoomControls';

describe('<MapZoomControls>', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store, componentContainer;

  beforeEach(() => {
    store = mockStore(initialState)
    componentContainer = <Provider store={store}><MapZoomControls /></Provider>;
  })

  it('could be renderd', () => {
    expect(mount(componentContainer).find(MapZoomControls).length).toEqual(1)
  });

  it('matched the snapshot', () => {
    const renderedValue =  renderer.create(componentContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});