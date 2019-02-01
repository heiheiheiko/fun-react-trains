import React from "react";
import PropTypes from 'prop-types';
import { Geography } from "react-simple-maps";
import { colorDarkest, colorDarker } from "../../config/colors";

const mapStyles = {
  fill: colorDarkest,
  stroke: colorDarker,
  strokeWidth: 0.25,
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