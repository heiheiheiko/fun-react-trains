import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import renderer from 'react-test-renderer'

import AppAside from './AppAside';

jest.mock('./TrainFilterForm', () => ()=> <div> TrainFilterForm </div>);
jest.mock('./MapZoomControls', () => ()=> <div> MapZoomControls </div>);
jest.mock('./MapCenterLabel', () => ()=> <div> MapCenterLabel </div>);

describe('<AppAside>', () => {
  const initialState = { mapCenter: [1,1] };
  const mockStore = configureStore();
  let store, componentContainer;

  beforeEach(() => {
    store = mockStore(initialState)
    componentContainer = <Provider store={store}><AppAside /></Provider>;
  })

  it('could be renderd', () => {
    expect(mount(componentContainer).find(AppAside).length).toEqual(1)
  });

  it('matched the snapshot', () => {
    const renderedValue =  renderer.create(componentContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});