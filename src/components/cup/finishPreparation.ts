import { sound } from "../sound/allSounds";
import fillCup from './fillCup';

function finishPreparation() {
    const msg = document.querySelector('.control__screen');
    const cup = document.querySelector('.wrapper');
    const steam = document.querySelector('.steam');
    
    fillCup(0.1);
    setTimeout(() => {
        sound.play('fillcup');
        fillCup(1.6);
        const liquid = document.querySelector(".liquid");
        setTimeout(() => {
            (liquid as HTMLElement).style.display = 'none';
        }, 4000)
    }, 8000)
    
    setTimeout(() => {
        msg.innerHTML = `Enjoy your coffee! Take your cup.`;
        cup.addEventListener('click', takeCup);
    }, 11000);

    function takeCup() {
        (cup as HTMLElement).style.display = "none";
        (steam as HTMLElement).style.display = "none";
        msg.innerHTML = `Choose your coffee`;
        const onBtn = document.getElementsByClassName('onBtn');
        (onBtn[0] as HTMLButtonElement).disabled = false;
        const drinks = document.getElementsByClassName('drink');
        for (let i = 0; i < drinks.length; i++) {
            (drinks[i] as HTMLButtonElement).disabled = false;
        }
    }

    return;
  }

  export default finishPreparation;