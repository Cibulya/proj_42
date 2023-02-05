import React from 'react';
import { Howl } from "howler";


function FinishPreparation() {
    const msg = document.querySelector('.control__screen');
    setTimeout(() => {
        msg.innerHTML = `Enjoy your coffee! Take your cup.`;
    }, 8000);
    
    const cup = document.querySelector('.cup');
    cup.addEventListener('click', () => {
        (cup as HTMLElement).style.display = "none";
        msg.innerHTML = `Choose your coffee`;
        const drinks = document.getElementsByClassName('drink');
        for (let i = 0; i < drinks.length; i++) {
            (drinks[i] as HTMLButtonElement).disabled = false;
        }
    });
    

    const sound = new Howl({
        src: ['https://github.com/MarinaKovel/coffeemachinesounds/blob/main/onOff.mp3?raw=true'],
    });
    sound.play()
    

    return ;
  }

  export default FinishPreparation;