import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import renderer from 'react-test-renderer'

import App from './App';

jest.mock('./AppAside', () => ()=> <div> AppAside </div>);

describe('<App>', () => {
  const initialState = { mapCenter: [1,1] };
  const mockStore = configureStore();
  let store, componentContainer;

  beforeEach(() => {
    store = mockStore(initialState)
    componentContainer = <Provider store={store}><App /></Provider>;
  })

  it('could be renderd', () => {
    expect(mount(componentContainer).find(App).length).toEqual(1)
  });

  it('matched the snapshot', () => {
    const renderedValue =  renderer.create(componentContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});