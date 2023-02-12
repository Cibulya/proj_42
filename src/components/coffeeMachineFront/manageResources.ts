import CheckResources from './checkResources';
import { sound } from "../sound/allSounds";

export let water = 1;
export let beans = 2;
export let wastePlace = 1;

function openDrinkChoice() {
  if (water && beans && wastePlace) {
    const drinks = document.querySelector('.control__middle');
    (drinks as HTMLElement).style.width = '100%';
    (drinks as HTMLElement).style.flex = '1';
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
export function addBeans() { 
  if (!beans) sound.play('grains');
  beans = 2; 
  const indicator = document.querySelector('.indicator__beans');
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
  beans--;
  wastePlace--;
}

document.addEventListener('keydown', function(event) {
  if (event.code == 'KeyW') addWater();
  if (event.code == 'KeyB') addBeans();
  if (event.code == 'KeyC') emptyWasteContainer();
});