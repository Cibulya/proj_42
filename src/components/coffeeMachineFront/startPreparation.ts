import React from 'react';
import CheckResources from './checkResources';
import addCup from '../cup/addCup';
import { water, beans, wastePlace, reduceResources } from './manageResources';

function startPreparation() {
  const drinkBtn = (event.target as HTMLElement).parentElement;
  
  const coffee = drinkBtn.getAttribute('value');
  const size = drinkBtn.getAttribute('data-size');
  const color = drinkBtn.getAttribute('name');

  const screen = document.querySelector('.control__screen');
  const isOn = document.querySelector('.onBtn').getAttribute("aria-pressed");

  const drinks = document.querySelector('.control__middle');
  (drinks as HTMLElement).style.width = '0px';
  (drinks as HTMLElement).style.flex = '0';
  (screen as HTMLElement).style.display = 'flex';

  const cupContainer = document.querySelector('.cup-container');
  const steamOne = document.querySelector('.coffee-medium__smoke-one');
  const steamTwo = document.querySelector('.coffee-medium__smoke-two');
  if (size === 'S') {
    (cupContainer as HTMLDivElement).style.flex = '0.4';
    (steamOne as HTMLDivElement).style.left = '22vh';
    (steamTwo as HTMLDivElement).style.right = '30vh';
  } else if (size === 'M') {
    (cupContainer as HTMLDivElement).style.flex = '0.5';
    (steamOne as HTMLDivElement).style.left = '25vh';
    (steamTwo as HTMLDivElement).style.right = '27vh';
  } else {
    (cupContainer as HTMLDivElement).style.flex = '0.6';
    (steamOne as HTMLDivElement).style.left = '28vh';
    (steamTwo as HTMLDivElement).style.right = '25vh';
  }

  const liquid = document.getElementById('Liquid');
  const stream = document.querySelector('.liquid');
  liquid.style.fill = color;
  (stream as HTMLElement).style.backgroundColor = color;

  const msg = document.querySelector('.message');
  const modal = document.querySelector('.card');

  function start() {
    if (!modal) CheckResources();
    if (water > 0 && beans > 0 && wastePlace > 0) {
      addCup();
      !modal ? msg.innerHTML = `Preparing ${coffee}...` : modal.innerHTML += coffee;
      
      const onBtn = document.getElementsByClassName('onBtn');
      (onBtn[0] as HTMLButtonElement).disabled = true;

      if (!modal) reduceResources();
    }
  }

  if (isOn === "true") {
    modal ? setTimeout(() => {start()}, 8000) : start();
  }
  
  return;
}

export default startPreparation;