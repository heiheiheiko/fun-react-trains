import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import SpecContainer from '../../../__specs__/helpers/SpecReduxIntelContainer';

import TrainFilterForm from './TrainFilterForm';

describe('<TrainFilterForm>', () => {
  let componentContainer;

  beforeEach(() => {
    componentContainer = <SpecContainer> <TrainFilterForm /> </SpecContainer>;
  })

  it('could be renderd', () => {
    expect(mount(componentContainer).find(TrainFilterForm).length).toEqual(1)
  });

  it('matched the snapshot', () => {
    const renderedValue =  renderer.create(componentContainer).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});