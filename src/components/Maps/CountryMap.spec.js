import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer'
import SpecContainer from '../../../__specs__/helpers/SpecIntelContainer';

import CountryMap from './CountryMap';

jest.mock('./Country', () => ()=> "Country");
jest.mock('./Map', () => ()=> "Map");

describe('<CountryMap>', () => {
  it('could be renderd', () => {
    const mountedSpecContainer = mount(<SpecContainer><CountryMap/></SpecContainer>);
    expect(mountedSpecContainer.find(CountryMap).length).toEqual(1);
  });

  it('matched the snapshot', () => {
    const specContainer = <SpecContainer><CountryMap/></SpecContainer>;
    const renderedValue =  renderer.create(specContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});