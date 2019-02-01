import React from "react";
import PropTypes from 'prop-types';
import { Geography } from "react-simple-maps";

const mapStyles = {
  fill: "#ECEFF1",
  stroke: "#607D8B",
  strokeWidth: 0.75,
  outline: "none",
}

function CountryMap(props) {
  return (
    <Geography
      geography={props.geography}
      projection={props.projection}
      style={{
        default: mapStyles,
        hover: mapStyles,
        pressed: mapStyles,
      }}
    />
  )
}

CountryMap.propTypes = {
  geography: PropTypes.object,
  projection: PropTypes.func,
};

export default CountryMap;