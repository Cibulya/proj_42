import React from 'react';
import { addWater, addBeans, emptyWasteContainer } from './manageResources';

function AddIndicators() {
  return (
    <div className="indicators">
      <div className="indicator indicator__water"></div>
      <button className="icon icon__water" onClick={addWater}></button>
      <div className="indicator indicator__beans"></div>
      <button className="icon icon__beans" onClick={addBeans}></button>
      <div className="indicator indicator__waste"></div>
      <button className="icon icon__waste" onClick={emptyWasteContainer}></button>
    </div>
  );
}

export default AddIndicators;
