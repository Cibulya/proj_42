import React from 'react';
import { addWater, addGrains, emptyWasteContainer } from './manageResources';

function AddIndicators() {

    return (
        <div className = "indicators">
            <div className = "indicator indicator__water"></div>
            <div className = "icon__water" onClick={addWater}></div>
            <div className = "indicator indicator__grains"></div>
            <div className = "icon__grains" onClick={addGrains}></div>
            <div className = "indicator indicator__waste"></div>
            <div className = "icon__waste" onClick={emptyWasteContainer}></div>
        </div>
    );
  }

  export default AddIndicators;