import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer'
import SpecContainer from '../../../__specs__/helpers/SpecIntelContainer';

import WorldMap from './WorldMap';

jest.mock('./Country', () => ()=> "Country");
jest.mock('./Map', () => ()=> "Map");

describe('<WorldMap>', () => {
  it('could be renderd', () => {
    const mountedSpecContainer = mount(<SpecContainer><WorldMap/></SpecContainer>);
    expect(mountedSpecContainer.find(WorldMap).length).toEqual(1);
  });

  it('matched the snapshot', () => {
    const specContainer = <SpecContainer><WorldMap/></SpecContainer>;
    const renderedValue =  renderer.create(specContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});