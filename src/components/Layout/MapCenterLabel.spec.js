import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer'
import SpecContainer from '../../../__specs__/helpers/SpecReduxIntelContainer'

import MapCenterLabel from './MapCenterLabel';

describe('<MapCenterLabel>', () => {
  let componentContainer;

  beforeEach(() => {
    componentContainer = <SpecContainer> <MapCenterLabel /> </SpecContainer>;
  })

  it('could be renderd', () => {
    expect(mount(componentContainer).find(MapCenterLabel).length).toEqual(1)
  });

  it('matched the snapshot', () => {
    const renderedValue =  renderer.create(componentContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});