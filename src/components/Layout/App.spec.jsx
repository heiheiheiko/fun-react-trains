import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer'

import App from './App';

jest.mock('./AppAside', () => ()=> <div> AppAside </div>);

describe('<App>', () => {
  it('could be renderd', () => {
    expect(mount(<App/>).find(App).length).toEqual(1)
  });

  it('matched the snapshot', () => {
    const renderedValue =  renderer.create(<App/>).toJSON()
    expect(renderedValue).toMatchSnapshot();
  });
});