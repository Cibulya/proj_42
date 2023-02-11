import CheckResources from './checkResources';
import { sound } from "../sound/allSounds";

export let water = 1;
export let grains = 2;
export let wastePlace = 1;

function openDrinkChoice() {
    if (water && grains && wastePlace) {
        const drinks = document.querySelector('.control__middle');
        (drinks as HTMLElement).style.flex = '2';
        const screen = document.querySelector('.control__screen');
        (screen as HTMLElement).style.display = 'none';
    }
}

export function addWater() {
    if (!water) sound.play('water');
    water = 1;
    const indicator = document.querySelector('.indicator__water');
    indicator.classList.remove('active');
    CheckResources();
    openDrinkChoice();
}
export function addGrains() { 
    if (!grains) sound.play('grains');
    grains = 2; 
    const indicator = document.querySelector('.indicator__grains');
    indicator.classList.remove('active');
    CheckResources();
    openDrinkChoice();
}
export function emptyWasteContainer() {
    if (!wastePlace) sound.play('container');
    wastePlace = 1;
    const indicator = document.querySelector('.indicator__waste');
    indicator.classList.remove('active');
    CheckResources();
    openDrinkChoice();
}

export function reduceResources() {
    water--;
    grains--;
    wastePlace--;
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyW') addWater();
    if (event.code == 'KeyG') addGrains();
    if (event.code == 'KeyC') emptyWasteContainer();
  });