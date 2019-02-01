import React, { Component } from "react"
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
} from "react-simple-maps"
import { cities } from "../../config/cities"
import TrainDataService from "../../services/TrainDataService"

class WorldMap extends Component {
  constructor(props) {
    super(props)

    const yOffset = 6
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight - yOffset;
    this.initialCoordinates = cities.find((city) => city.id === "helsinki" ).coordinates
    this.trainDataService = new TrainDataService();
  }

  componentDidMount() {
    this.trainDataService.fetchData();
  }

  componentWillUnmount(){
    this.trainDataService.stopFetchingData();
  }

  render() {
    return (
      <ComposableMap
        projectionConfig={{
          scale: 500,
          rotation: [-11,0,0],
        }}
        width={this.screenWidth}
        height={this.screenHeight}
      >
        <ZoomableGroup center={this.initialCoordinates} zoom={3} disablePanning>
          <Geographies geography="/maps/world-50m.json">
            {(geographies, projection) => geographies.map((geography, i) => geography.id !== "ATA" && (
              <Geography
                key={i}
                geography={geography}
                projection={projection}
                style={{
                  default: {
                    fill: "#ECEFF1",
                    stroke: "#607D8B",
                    strokeWidth: 0.75,
                    outline: "none",
                  },
                  hover: {
                    fill: "#607D8B",
                    stroke: "#607D8B",
                    strokeWidth: 0.75,
                    outline: "none",
                  }
                }}
              />
            ))}
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    )
  }
}

export default WorldMap