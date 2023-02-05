import React from 'react';
import { sound } from "../sound/allSounds";
import FinishPreparation from './finishPreparation';

function AddCup() {
    const cup = document.querySelector('.cup');
    (cup as HTMLElement).style.display = "block";

    sound.play('cup-on-shell');
    sound.play('making-coffee');

    FinishPreparation();

    return;
  }

  export default AddCup;