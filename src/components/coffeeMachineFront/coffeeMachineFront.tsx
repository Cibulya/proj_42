import React from 'react';
import './coffeeMachineFront.scss';

const CoffeeMachineFront = function() {

    return (
        <div className = "machine">
            <div className = "control">
                <div className = "control__onOff"></div>
                <div className = "control__middle">
                    <div className = "drink espresso"></div>
                    <div className = "drink americano"></div>
                    <div className = "drink cappuccino"></div>
                    <div className = "drink latte"></div>
                    <div className = "drink macciato"></div>
                    <div className = "drink mocha"></div>
                </div>
                <div className = "control__screen">Choose your coffee</div>
            </div>
            <div className = "placeForCup"></div>
            <div className = "shelf"></div>
        </div>
    );
}
export default CoffeeMachineFront;
