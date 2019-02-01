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

class Map extends Component {
  constructor(props) {
    super(props)

    const yOffset = 6
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight - yOffset;
    this.trainDataService = new TrainDataService();
    this.trainZoom = 10;
  }

  handleTrainClick(train) {
    this.props.updateMapCenter(train.location.coordinates);
    this.props.updateMapZoom(this.trainZoom);
  }

  componentDidMount() {
    this.trainDataService.fetchData();
  }

  componentWillUnmount(){
    this.trainDataService.stopFetchingData();
  }

  computedTrains() {
    if (this.props.filterString) {
      const filterTrainNumbers = this.props.filterString.
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
                    marker={{ coordinates: train.location.coordinates }}
                    key={train.trainNumber}
                    onClick={() => this.handleTrainClick(train)}
                  >
                    <rect x={0} y={0} width={60} height={16} fill="#FFF" />
                    <text x={2} y={14}>{ train.trainNumber }</text>
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
  filterString: PropTypes.string,
  mapZoom: PropTypes.number,
  mapCenter: PropTypes.array,
  updateMapCenter: PropTypes.func,
  updateMapZoom: PropTypes.func,
};

const mapState = state => ({ 
  trains: state.trains ,
  filterString: state.filterString,
  mapZoom: state.mapZoom,
  mapCenter: state.mapCenter,
});

const mapDispatch = dispatch => ({
  updateMapZoom: mapZoom => dispatch(updateMapZoom(mapZoom)),
  updateMapCenter: mapCenter => dispatch(updateMapCenter(mapCenter)),
});

const ConnectedComponent = connect(mapState, mapDispatch)(Map);
export default ConnectedComponent;