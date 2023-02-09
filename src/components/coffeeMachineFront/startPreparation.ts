import React from 'react';
import CheckResources from './checkResources';
import addCup from '../cup/addCup';
import { water, grains, wastePlace, reduceResources } from './manageResources';

function startPreparation() {
    const drinkBtn = (event.target as HTMLElement).parentElement;
    const coffee = drinkBtn.getAttribute('value');
    const size = drinkBtn.getAttribute('data-size');
    const color = drinkBtn.getAttribute('name');

    const msg = document.querySelector('.control__screen');
    const isOn = document.querySelector('.control__middle').previousElementSibling.getAttribute("aria-pressed");

    const cupContainer = document.querySelector('.cup-container');
    const steamOne = document.querySelector('.coffee-medium__smoke-one');
    const steamTwo = document.querySelector('.coffee-medium__smoke-two');
    if (size === 'S') {
        (cupContainer as HTMLDivElement).style.flex = '0.5';
        (steamOne as HTMLDivElement).style.left = '32vh';
        (steamTwo as HTMLDivElement).style.right = '32vh';
    } else if (size === 'M') {
        (cupContainer as HTMLDivElement).style.flex = '0.7';
        (steamOne as HTMLDivElement).style.left = '27vh';
        (steamTwo as HTMLDivElement).style.right = '27vh';
    } else {
        (cupContainer as HTMLDivElement).style.flex = '1';
        (steamOne as HTMLDivElement).style.left = '25vh';
        (steamTwo as HTMLDivElement).style.right = '25vh';
    }

    const liquid = document.getElementById('Liquid');
    const stream = document.querySelector('.liquid');
    liquid.style.fill = color;
    (stream as HTMLElement).style.backgroundColor = color;

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