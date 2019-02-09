import React from 'react';
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import SpecIntelContainer from "./SpecIntelContainer";
import initialState from "../../src/redux/initialState";

function SpecReduxIntelContainer(props) {
  const mockStore = configureStore();
  const store = mockStore(initialState)
  
  return (
    <Provider store={store}> 
      <SpecIntelContainer>
        {props.children}
      </SpecIntelContainer>
    </Provider>
  );
}

export default SpecReduxIntelContainer;
