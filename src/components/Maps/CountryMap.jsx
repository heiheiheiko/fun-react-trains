import React from "react";
import PropTypes from 'prop-types';
import { Geographies, Geography } from "react-simple-maps";
import Map from './Map';

const mapStyles = {
  fill: "#ECEFF1",
  stroke: "#607D8B",
  strokeWidth: 0.75,
  outline: "none",
}

function CountryMap(props) {
  return (
    <Map>
      <Geographies geography="/maps/world-50m.json">
        {(geographies, projection) =>
          geographies.map((geography, i) =>
            props.countries.includes(geography.id) && (
              <Geography
                key={i}
                geography={geography}
                projection={projection}
                style={{
                  default: mapStyles,
                  hover: mapStyles,
                  pressed: mapStyles,
                }}
              />
          ))
        }
      </Geographies>
    </Map>
  );
}

CountryMap.propTypes = {
  countries: PropTypes.array,
};

export default CountryMap;