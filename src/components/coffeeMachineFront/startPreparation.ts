import React from 'react';
import CheckResources from './checkResources';
import addCup from '../cup/addCup';
import { water, beans, wastePlace, reduceResources } from './manageResources';

function startPreparation(msgNoResources: Array<string>, enjoy: string, choose: string) {
  let drinkBtn;
  if ((event.target as HTMLElement).getAttribute('class').includes('drink')) {
    drinkBtn = (event.target as HTMLElement).parentElement;
  } else {
    drinkBtn = event.target as HTMLElement;
  }

  const coffee = drinkBtn.getAttribute('value');
  const size = drinkBtn.getAttribute('data-size');
  const color = drinkBtn.getAttribute('name');

  const screen = document.querySelector('.control__screen');
  const isOn = document.querySelector('.onBtn').getAttribute('aria-pressed');

  const drinks = document.querySelector('.control__middle');
  drinks.classList.add('hidden');
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
  const modal = document.getElementsByClassName('card');

  function start(msgNoResources: Array<string>, enjoy: string, choose: string) {
    if (!modal.length) CheckResources(msgNoResources);
    if (water > 0 && beans > 0 && wastePlace > 0) {
      addCup(enjoy, choose);
      if (!modal.length) {
        msg.innerHTML = `Preparing ${coffee}...`;
      } else {
        if (modal[2]) modal[2].innerHTML += coffee;
      }
      const onBtn = document.getElementsByClassName('onBtn');
      (onBtn[0] as HTMLButtonElement).disabled = true;
      if (!modal.length) reduceResources();
    }
  }

  if (isOn === 'true') {
    modal.length
      ? setTimeout(() => {
          start(msgNoResources, enjoy, choose);
        }, 8000)
      : start(msgNoResources, enjoy, choose);
  }

  return;
}

export default startPreparation;
