import React from "react";
import PropTypes from 'prop-types';
import { Geographies, Geography } from "react-simple-maps";
import Map from './Map';
import Country from './Country';

function CountryMap(props) {
  return (
    <Map>
      <Geographies geography="/maps/world-50m.json">
        {(geographies, projection) =>
          geographies.map((geography, i) =>
            props.countries.includes(geography.id) && (
              <Country geography={geography} projection={projection} key={i} />
            )
          )
        }
      </Geographies>
    </Map>
  );
}

CountryMap.propTypes = {
  countries: PropTypes.array,
};

export default CountryMap;