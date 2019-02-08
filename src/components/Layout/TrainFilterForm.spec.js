import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import SpecContainer from '../../../__specs__/helpers/SpecReduxIntelContainer';

import TrainFilterForm from './TrainFilterForm';

describe('<TrainFilterForm>', () => {
  const initialState = {};
  const mockStore = configureStore();
  let store, componentContainer;

  beforeEach(() => {
    store = mockStore(initialState)
    componentContainer = <SpecContainer store={store}> <TrainFilterForm /> </SpecContainer>;
  })

  it('could be renderd', () => {
    expect(mount(componentContainer).find(TrainFilterForm).length).toEqual(1)
  });

  it('matched the snapshot', () => {
    const renderedValue =  renderer.create(componentContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});