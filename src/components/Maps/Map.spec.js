import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import SpecContainer from '../../../__specs__/helpers/SpecReduxIntelContainer';

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
  let componentContainer;

  beforeEach(() => {
    componentContainer = <SpecContainer> <Map/> </SpecContainer>;
  })

  it('could be renderd', () => {
    expect(mount(componentContainer).find(Map).length).toEqual(1)
  });

  it('matched the snapshot', () => {
    const renderedValue =  renderer.create(componentContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});