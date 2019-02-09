import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer'
import SpecContainer from '../../../__specs__/helpers/SpecReduxIntelContainer'

import MapZoomControls from './MapZoomControls';

describe('<MapZoomControls>', () => {
  let componentContainer;

  beforeEach(() => {
    componentContainer = <SpecContainer><MapZoomControls /></SpecContainer>;
  })

  it('could be renderd', () => {
    expect(mount(componentContainer).find(MapZoomControls).length).toEqual(1)
  });

  it('matched the snapshot', () => {
    const renderedValue =  renderer.create(componentContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});