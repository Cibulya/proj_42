import { sound } from "../sound/allSounds";
import fillCup from './fillCup';

export let removeCup: Function; 

function finishPreparation() {
  fillCup(0.1);
  setTimeout(() => {
    sound.play('fillcup');
    fillCup(1.6);
    const liquid = document.querySelector(".liquid");
    setTimeout(() => {
      (liquid as HTMLElement).style.display = 'none';
    }, 4000)
  }, 8000)

  const msg = document.querySelector('.message');
  const cup = document.querySelector('.wrapper');

  setTimeout(() => {
    msg.innerHTML = `Enjoy your coffee! Take your cup.`;
    const cupContainer = document.querySelector('.cup-container');
    (cupContainer as HTMLElement).style.cursor = 'pointer';
    cup.addEventListener('click', takeCup);
  }, 12000);

  const modal = document.querySelector('.card');

  const takeCup = function () {
    const steam = document.querySelector('.steam');
    (cup as HTMLElement).style.display = "none";
    (steam as HTMLElement).style.display = "none";
    !modal ? msg.innerHTML = 'Choose your coffee' : msg.innerHTML = '';
    
    const screen = document.querySelector('.control__screen');
    const drinkBtns = document.querySelector('.control__middle');
    setTimeout(() => {
      if (!modal) (screen as HTMLElement).style.display = 'none';
      if (!modal) drinkBtns.classList.remove('hidden');
    }, 1500);

    const onBtn = document.getElementsByClassName('onBtn');
    (onBtn[0] as HTMLButtonElement).disabled = false;
  }

  removeCup = takeCup;

  return;
}

export default finishPreparation;