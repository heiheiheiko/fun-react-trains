import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import SpecContainer from '../../../__specs__/helpers/SpecReduxIntelContainer';
import initialState from '../../redux/initialState';

import Map from './Map';

jest.mock('react-simple-maps', () => ({
  ComposableMap: "ComposableMap",
  ZoomableGroup: "ZoomableGroup",
  Markers: "Markers",
  Marker: "Marker",
}))

jest.mock('react-motion', () => ({
  Motion: "Motion",
  spring: () => "spring",
}))

describe('<Map>', () => {
  const mockStore = configureStore();
  let store, componentContainer;

  beforeEach(() => {
    store = mockStore(initialState)
    componentContainer = <SpecContainer store={store}> <Map/> </SpecContainer>;
  })

  it('could be renderd', () => {
    expect(mount(componentContainer).find(Map).length).toEqual(1)
  });

  it('matched the snapshot', () => {
    const renderedValue =  renderer.create(componentContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});