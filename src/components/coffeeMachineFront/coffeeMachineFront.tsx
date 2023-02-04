import React from 'react';
import './coffeeMachineFront.scss';
import TurnOnOff from './onOffBtn';
import ToggleButtons from './coffeeBtns';

const CoffeeMachineFront = function() {

    return (
        <div className = "container">
            <div className = "invitation">It's a wonderful day! Enjoy your pause and drink a cup of coffee. First turn on the Coffee Machine and choose your drink.</div>
            <div className = "machine">
                <div className = "control">
                    <TurnOnOff/>
                    <ToggleButtons/>
                    <div className = "control__right">
                        <div className = "control__screen">Choose your coffee</div>
                        <div className = "indicators">
                            <div className = "indicator indicator__water"></div>
                            <div className = "icon__water"></div>
                            <div className = "indicator indicator__coffee"></div>
                            <div className = "icon__coffee"></div>
                            <div className = "indicator indicator__waste"></div>
                            <div className = "icon__waste"></div>
                        </div>
                    </div>
                </div>
                <div className = "placeForCup"></div>
                <div className = "shelf"></div>
            </div>
        </div>
        
    );
}
export default CoffeeMachineFront;
