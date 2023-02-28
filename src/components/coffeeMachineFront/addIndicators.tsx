import React from 'react';
import { addWater, addBeans, emptyWasteContainer } from './manageResources';

export type MsgNoResourcesPropsType = {
  msgNoResources: Array<string>;
  enjoy: string;
  choose: string;
};

function AddIndicators({ msgNoResources }: MsgNoResourcesPropsType) {
  
  return (
    <div className="indicators">
      <div className="indicator indicator__water"></div>
      <button className="icon icon__water" onClick={() => addWater(msgNoResources)} disabled></button>
      <div className="indicator indicator__beans"></div>
      <button className="icon icon__beans" onClick={() => addBeans(msgNoResources)} disabled></button>
      <div className="indicator indicator__waste"></div>
      <button className="icon icon__waste" onClick={() => emptyWasteContainer(msgNoResources)} disabled></button>
    </div>
  );
}

export default AddIndicators;
