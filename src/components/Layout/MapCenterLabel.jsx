import React from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl'

function MapCenterLabel(props) {
  return (
    <a 
      className="f-row f-ccenter" 
      href={`http://www.google.com/maps/place/${props.mapCenterLat},${props.mapCenterLong}`}
      target="_blank"
      rel="noreferrer noopener"
    >
      <div className="is-size-5 mx-small has-text-weight-semibold"> 
        <FormattedMessage id="aside.mapCenterLabel.latitude"/>: {props.mapCenterLat.toFixed(2)}... 
      </div>
      <div className="is-size-5 mx-small has-text-weight-semibold"> 
        <FormattedMessage id="aside.mapCenterLabel.longitude"/>: {props.mapCenterLong.toFixed(2)}... 
      </div>
    </a>
  );
}

MapCenterLabel.propTypes = {
  mapCenterLat: PropTypes.number,
  mapCenterLong: PropTypes.number,
};

const mapState = state => ({ 
  mapCenterLat: state.mapCenter[1],
  mapCenterLong: state.mapCenter[0],
});

const ConnectedComponent = connect(mapState, null)(MapCenterLabel);
export default ConnectedComponent;
