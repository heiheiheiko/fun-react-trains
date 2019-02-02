import React, { Component } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { updateMapZoom } from '../../redux/actions';

class MapZoomControls extends Component {
  onMinusClick() {
    this.props.updateMapZoom(this.props.mapZoom - 1);
  }
  
  onPlusClick() {
    this.props.updateMapZoom(this.props.mapZoom + 1);
  }

  render() {
    return (
      <div className="f-row f-ccenter">
        <a className="button is-outlined is-primary has-text-weight-semibold" onClick={() => this.onMinusClick()}>-</a>
        <div className="is-size-4 mx-small has-text-weight-semibold"> {this.props.mapZoom} </div>
        <a className="button is-outlined is-primary has-text-weight-semibold" onClick={() => this.onPlusClick()}>+</a>
      </div>
     );
  }
}

MapZoomControls.propTypes = {
  mapZoom: PropTypes.number,
  updateMapZoom: PropTypes.func,
};

const mapState = state => ({ 
  mapZoom: state.mapZoom,
});

const mapDispatch = dispatch => ({
  updateMapZoom: mapZoom => dispatch(updateMapZoom(mapZoom)),
});

const ConnectedComponent = connect(mapState, mapDispatch)(MapZoomControls);
export default ConnectedComponent;
