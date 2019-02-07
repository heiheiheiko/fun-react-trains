import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer'

import AppAside from './AppAside';

jest.mock('./TrainFilterForm', () => ()=> <div> TrainFilterForm </div>);
jest.mock('./MapZoomControls', () => ()=> <div> MapZoomControls </div>);
jest.mock('./MapCenterLabel', () => ()=> <div> MapCenterLabel </div>);

describe('<AppAside>', () => {
  it('could be renderd', () => {
    expect(mount(<AppAside/>).find(AppAside).length).toEqual(1)
  });

  it('matched the snapshot', () => {
    const renderedValue =  renderer.create(<AppAside/>).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});