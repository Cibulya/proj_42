import React from 'react';
import CheckResources from './checkResources';
import addCup from '../cup/addCup';
import { water, grains, wastePlace, reduceResources } from './manageResources';

function startPreparation() {
    const coffee = (event.target as HTMLElement).parentElement.getAttribute('value');
    const msg = document.querySelector('.control__screen');
    const isOn = document.querySelector('.control__middle').previousElementSibling.getAttribute("aria-pressed");

    if (isOn === "true") {
        CheckResources();
        if (water > 0 && grains > 0 && wastePlace > 0) {
            addCup();
            msg.innerHTML = `Preparing ${coffee}...`;
            const onBtn = document.getElementsByClassName('onBtn');
            (onBtn[0] as HTMLButtonElement).disabled = true;
            const drinks = document.getElementsByClassName('drink');
            for (let i = 0; i < drinks.length; i++) {
                (drinks[i] as HTMLButtonElement).disabled = true;
            }
            reduceResources();
        }
    }
    return;
}

export default startPreparation;