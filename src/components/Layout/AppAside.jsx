import React from 'react';
import TrainFilterForm from './TrainFilterForm';
import MapZoomControls from './MapZoomControls';
import MapCenterLabel from './MapCenterLabel';

function AppAside(props) {
  return (
    <div className="overlay__layer overlay__layer--top-right mt-small">
      <div className="py-small pr-large pl-normal has-background-light">
        <TrainFilterForm/>
      </div>

      <div className="mt-small py-small pr-large pl-normal has-background-light">
        <MapZoomControls/>
      </div>

      <div className="mt-small py-small pr-large pl-normal has-background-light">
        <MapCenterLabel/>
      </div>
    </div>
   );
}

export default AppAside;
