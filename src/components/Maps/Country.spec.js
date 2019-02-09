import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer'
import SpecContainer from '../../../__specs__/helpers/SpecIntelContainer';

import Country from './Country';

jest.mock('react-simple-maps', () => ({
  Geography: "Geography"
}))

describe('<Country>', () => {
  it('could be renderd', () => {
    const mountedSpecContainer = mount(<SpecContainer><Country/></SpecContainer>);
    expect(mountedSpecContainer.find(Country).length).toEqual(1);
  });

  it('matched the snapshot', () => {
    const specContainer = <SpecContainer><Country/></SpecContainer>;
    const renderedValue =  renderer.create(specContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});