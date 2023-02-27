import React from 'react';
import 'styles/coffeeMachineFront.scss';
import TurnOnOff from './onOffBtn';
import AddIndicators from './addIndicators';
import Cup from '../cup/cup';
import 'styles/cup.scss';
import Steam from '../cup/steam';
import Drinks from 'providers/drinks/drinks';
import CanvasClock from 'components/canvasClock';
import { sound } from '../sound/allSounds';

const CoffeeMachineFront = function () {
  function playSecret() {
    sound.play('secret');
  }

  return (
    <div className="machine">
      <div className="control">
        <div className="container__left">
          <TurnOnOff />
          <AddIndicators />
        </div>
        <div className="control__right">
          <Drinks />
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
            <p className="message">Turn on the coffee machine</p>
          </div>
          <div className="auth-icon">
            <p className="account">My Account</p>
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
