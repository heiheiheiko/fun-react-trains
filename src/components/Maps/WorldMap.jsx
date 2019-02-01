import React, { Component } from "react";
import { Geographies, Geography } from "react-simple-maps";
import Map from './Map';
import Country from './Country';

function WorldMap(props) {
  return (
    <Map>
      <Geographies geography="/maps/world-50m.json">
        {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
          <Country geography={geography} projection={projection} key={i} />
        ))}
      </Geographies>
    </Map>
  );
}

export default WorldMap;