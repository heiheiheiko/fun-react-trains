import React from 'react';
import { Provider } from "react-redux";
import PropTypes from 'prop-types';
import SpecIntelContainer from "./SpecIntelContainer";

function SpecReduxIntelContainer(props) {
  return (
    <Provider store={props.store}> 
      <SpecIntelContainer>
        {props.children}
      </SpecIntelContainer>
    </Provider>
  );
}

SpecReduxIntelContainer.propTypes = {
  store: PropTypes.object,
};

export default SpecReduxIntelContainer;
