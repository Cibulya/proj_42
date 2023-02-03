import React from 'react';
import './coffeeMachineFront.scss';

const CoffeeMachineFront = function() {

    return (
        <div className = "container">
            <div className = "invitation">It's a wonderful day! Enjoy your pause and drink a cup of coffee. First turn on the Coffee Machine and choose your drink.</div>
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
