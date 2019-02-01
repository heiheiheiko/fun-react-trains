import React, { Component } from "react";
import { Geographies, Geography } from "react-simple-maps";
import Map from './Map';

const mapStyles = {
  fill: "#ECEFF1",
  stroke: "#607D8B",
  strokeWidth: 0.75,
  outline: "none",
}

function WorldMap(props) {
  return (
    <Map>
      <Geographies geography="/maps/world-50m.json">
        {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
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
        ))}
      </Geographies>
    </Map>
  );
}

export default WorldMap;