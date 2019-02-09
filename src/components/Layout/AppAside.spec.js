import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer'
import SpecContainer from '../../../__specs__/helpers/SpecIntelContainer';

import AppAside from './AppAside';

jest.mock('./TrainFilterForm', () => ()=> "TrainFilterForm");
jest.mock('./MapZoomControls', () => ()=> "MapZoomControls");
jest.mock('./MapCenterLabel', () => ()=> "MapCenterLabel");

describe('<AppAside>', () => {
  it('could be renderd', () => {
    const mountedSpecContainer = mount(<SpecContainer><AppAside/></SpecContainer>);
    expect(mountedSpecContainer.find(AppAside).length).toEqual(1);
  });

  it('matched the snapshot', () => {
    const specContainer = <SpecContainer><AppAside/></SpecContainer>;
    const renderedValue =  renderer.create(specContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});