import CheckResources from './checkResources';
import { sound } from '../sound/allSounds';

export let water = 1;
export let beans = 2;
export let wastePlace = 1;

const indicators = document.getElementsByClassName('icon');

function openDrinkChoice() {
  if (water && beans && wastePlace) {
    const drinks = document.querySelector('.control__middle');
    drinks.classList.remove('hidden');
    const screen = document.querySelector('.control__screen');
    (screen as HTMLElement).style.display = 'none';
  }
}
export function addWater(msgNoResources: Array<string>) {
  if (!water) sound.play('water');
  water = 1;
  const indicator = document.querySelector('.indicator__water');
  indicator.classList.remove('on');
  indicators[0].nextElementSibling.setAttribute('disabled', 'true');
  CheckResources(msgNoResources);
  openDrinkChoice();
}
export function addBeans(msgNoResources: Array<string>) {
  if (!beans) sound.play('grains');
  beans = 2;
  const indicator = document.querySelector('.indicator__beans');
  indicator.classList.remove('on');
  indicators[1].nextElementSibling.setAttribute('disabled', 'true');
  CheckResources(msgNoResources);
  openDrinkChoice();
}
export function emptyWasteContainer(msgNoResources: Array<string>) {
  if (!wastePlace) sound.play('container');
  wastePlace = 1;
  const indicator = document.querySelector('.indicator__waste');
  indicator.classList.remove('on');
  indicators[2].nextElementSibling.setAttribute('disabled', 'true');
  CheckResources(msgNoResources);
  openDrinkChoice();
}

export function reduceResources() {
  water--;
  beans--;
  wastePlace--;
}
