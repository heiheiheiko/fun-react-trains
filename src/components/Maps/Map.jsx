import React, { Component } from "react"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  ComposableMap,
  ZoomableGroup,
  Markers,
  Marker,
} from "react-simple-maps";
import { Motion, spring } from "react-motion";
import TrainDataService from "../../services/TrainDataService";
import { updateMapCenter, updateMapZoom } from "../../redux/actions";
import { colorPrimary, colorDanger, colorWarning, colorInfo } from "../../config/colors";

class Map extends Component {
  constructor(props) {
    super(props)

    const yOffset = 6
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight - yOffset;
    this.trainDataService = new TrainDataService();
    this.trainZoom = 10;
  }

  onTrainClick(train) {
    this.props.updateMapCenter(train.location.coordinates);
    if (this.props.mapZoom < 10) {
      this.props.updateMapZoom(this.trainZoom);
    }
  }

  componentDidMount() {
    this.trainDataService.fetchData();
  }

  componentWillUnmount(){
    this.trainDataService.stopFetchingData();
  }

  computedTrains() {
    if (this.props.trainFilterString) {
      const filterTrainNumbers = this.props.trainFilterString.
        replace(" ", "").split(",").map((number) => parseInt(number));

      return this.props.trains.filter((train) => filterTrainNumbers.includes(train.trainNumber));
    } else {
      return this.props.trains
    }
  }

  render() {
    const trains = this.computedTrains()

    return (
      <Motion
        style={{
          zoom: spring(this.props.mapZoom, {stiffness: 210, damping: 20}),
          x: spring(this.props.mapCenter[0], {stiffness: 210, damping: 20}),
          y: spring(this.props.mapCenter[1], {stiffness: 210, damping: 20}),
        }}
      >
        {({zoom,x,y}) => (
          <ComposableMap
            projectionConfig={{
              scale: 500,
              rotation: [-11,0,0],
            }}
            width={this.screenWidth}
            height={this.screenHeight}
          >
            <ZoomableGroup center={[x,y]} zoom={zoom}>
              {this.props.children}
              <Markers>
                {trains.map((train) => 
                  <Marker
                    key={train.trainNumber}
                    marker={{ coordinates: train.location.coordinates }}
                    onClick={() => this.onTrainClick(train)}
                    style={{
                      default: { stroke: colorInfo },
                      hover: { stroke: colorPrimary },
                      pressed: { stroke: colorPrimary },
                    }}
                  >
                    <g transform="translate(-12, -24)" className="is-interactable">
                      <path
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeMiterlimit="10"
                        strokeLinejoin="miter"
                        d="M20,9c0,4.9-8,13-8,13S4,13.9,4,9c0-5.1,4.1-8,8-8S20,3.9,20,9z"
                      />
                      <circle
                        fill="none"
                        strokeWidth="2"
                        strokeLinecap="square"
                        strokeMiterlimit="10"
                        strokeLinejoin="miter"
                        cx="12"
                        cy="9"
                        r="3"
                      />
                    </g>
                    <text
                      className="is-interactable"
                      textAnchor="middle"
                      y={20}
                      style={{ fill: colorInfo }}
                    >
                      {train.trainNumber}
                    </text>
                  </Marker>
                )}
              </Markers>
            </ZoomableGroup>
          </ComposableMap>
        )}
      </Motion>
    )
  }
}

Map.propTypes = {
  trains: PropTypes.array,
  trainFilterString: PropTypes.string,
  mapZoom: PropTypes.number,
  mapCenter: PropTypes.array,
  updateMapCenter: PropTypes.func,
  updateMapZoom: PropTypes.func,
};

const mapState = state => ({ 
  trains: state.trains ,
  trainFilterString: state.trainFilterString,
  mapZoom: state.mapZoom,
  mapCenter: state.mapCenter,
});

const mapDispatch = dispatch => ({
  updateMapZoom: mapZoom => dispatch(updateMapZoom(mapZoom)),
  updateMapCenter: mapCenter => dispatch(updateMapCenter(mapCenter)),
});

const ConnectedComponent = connect(mapState, mapDispatch)(Map);
export default ConnectedComponent;