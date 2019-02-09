import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer'
import SpecContainer from '../../../__specs__/helpers/SpecIntelContainer';

import AppAside from './AppAside';

jest.mock('./TrainFilterForm', () => ()=> <div> TrainFilterForm </div>);
jest.mock('./MapZoomControls', () => ()=> <div> MapZoomControls </div>);
jest.mock('./MapCenterLabel', () => ()=> <div> MapCenterLabel </div>);

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