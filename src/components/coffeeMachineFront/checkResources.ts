import { water, beans, wastePlace } from './manageResources';

function checkResources() {
  let resources = [water, beans, wastePlace];
  let indicators = [
    document.querySelector('.indicator__water'), 
    document.querySelector('.indicator__beans'), 
    document.querySelector('.indicator__waste')
  ];

  const msg = document.querySelector('.control__screen');
  msg.innerHTML = '';
  const msgNoResources = ['Add water (press "W"). ', 'Add coffee beans (press "B"). ', 'Empty waste container (press "C").'];
  const drinks = document.querySelector('.control__middle');

  for (let i = 0; i < resources.length; i++) {
    if (!resources[i]) {
      indicators[i].classList.add('active');
      msg.innerHTML += msgNoResources[i];
      (drinks as HTMLElement).style.width = '0px';
      (drinks as HTMLElement).style.flex = '0';
    }
  }

  return;
}

export default checkResources;