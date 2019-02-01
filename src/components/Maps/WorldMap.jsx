import React, { Component } from "react"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography,
  Markers,
  Marker,
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
    const trains = this.props.trains

    return (
      <ComposableMap
        projectionConfig={{
          scale: 500,
          rotation: [-11,0,0],
        }}
        width={this.screenWidth}
        height={this.screenHeight}
      >
        <ZoomableGroup center={this.initialCoordinates} zoom={7} disablePanning>
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
          <Markers>
            {trains.map((train) => 
              <Marker 
                marker={{ coordinates: train.location.coordinates }}
                key={train.trainNumber}
              >
                <rect x={0} y={0} width={60} height={16} fill="#FFF" />
                <text x={2} y={14}>{ train.trainNumber }</text>
              </Marker>
            )}
          </Markers>
        </ZoomableGroup>
      </ComposableMap>
    )
  }
}

WorldMap.propTypes = {
  trains: PropTypes.array,
};

const mapState = state => ({ trains: state.trains });
const ConnectedComponent = connect(mapState, null)(WorldMap);
export default ConnectedComponent;