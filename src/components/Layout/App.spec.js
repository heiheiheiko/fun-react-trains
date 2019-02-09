import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer'
import SpecContainer from '../../../__specs__/helpers/SpecIntelContainer';

import App from './App';

jest.mock('./AppAside', () => ()=> "AppAside");

describe('<App>', () => {
  it('could be renderd', () => {
    const mountedSpecContainer = mount(<SpecContainer><App/></SpecContainer>);
    expect(mountedSpecContainer.find(App).length).toEqual(1)
  });

  it('matched the snapshot', () => {
    const specContainer = <SpecContainer><App/></SpecContainer>;
    const renderedValue =  renderer.create(specContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});