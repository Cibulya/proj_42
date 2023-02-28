import React from 'react';
import 'styles/coffeeMachineFront.scss';
import TurnOnOff from './onOffBtn';
import AddIndicators, { MsgNoResourcesPropsType } from './addIndicators';
import Cup from '../cup/cup';
import 'styles/cup.scss';
import Steam from '../cup/steam';
import Drinks from 'providers/drinks/drinks';
import CanvasClock from 'components/canvasClock';
import { sound } from '../sound/allSounds';
import { addBeans, addWater, emptyWasteContainer } from 'components/coffeeMachineFront/manageResources';
import { useTranslation } from 'react-i18next';

const CoffeeMachineFront = function ({ msgNoResources, enjoy, choose }: MsgNoResourcesPropsType) {
  const { t } = useTranslation();
  function playSecret() {
    sound.play('secret');
  }
  document.addEventListener('keydown', (event) => {
    if (event.code == 'KeyW') addWater(msgNoResources);
    if (event.code == 'KeyB') addBeans(msgNoResources);
    if (event.code == 'KeyE') emptyWasteContainer(msgNoResources);
  }
  )
  return (
    <div className="machine">
      <div className="control">
        <div className="container__left">
          <TurnOnOff />
          <AddIndicators msgNoResources={msgNoResources} enjoy={enjoy} choose={choose}/>
        </div>
        <div className="control__right">
          <Drinks msgNoResources={msgNoResources} enjoy={enjoy} choose={choose}/>
          <div className="control__screen">
            <CanvasClock
              id="canvas"
              top="10"
              left="-13"
              width="200"
              height="29"
              fontSize="12"
              dialColor="rgb(227, 214, 214)"
              bgColor="#a17d8b"
            />
            <p className="message">{t(`pause-turnon`)}</p>
          </div>
          <div className="auth-icon">
            <p className="account">{t(`account`)}</p>
          </div>
        </div>
      </div>
      <div className="placeForCup">
        <div className="liquid"></div>
        <Steam />
        <Cup />
      </div>
      <div className="shelf"></div>
      <a href="/secret" target="_blank">
        <div className="hint" onClick={playSecret}></div>
      </a>
    </div>
  );
};
export default CoffeeMachineFront;
