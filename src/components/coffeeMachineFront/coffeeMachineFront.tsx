import React from 'react';
import './coffeeMachineFront.scss';
import TurnOnOff from './onOffBtn';
import ChooseCoffee from './chooseCoffee';
import AddIndicators from './addIndicators';
import Cup from '../cup/cup';
import '../cup/cup.scss';
import Steam from '../cup/steam';


const CoffeeMachineFront = function() {

    return (
        <div className = "container">
            <div className = "invitation">It's a wonderful day! Enjoy your pause and drink a cup of coffee. First turn on the Coffee Machine and choose your drink.</div>
            <div className = "machine">
                <div className = "control">
                    <TurnOnOff/>
                    <ChooseCoffee/>
                    <div className = "control__right">
                        <div className = "control__screen">Turn on the coffee machine</div>
                        <AddIndicators/>
                    </div>
                </div>
                <div className = "placeForCup">
                    <div className="liquid"></div>
                    <Steam/>
                    <Cup/>
                </div>
                <div className = "shelf"></div>
            </div>
        </div>
    );
}
export default CoffeeMachineFront;
