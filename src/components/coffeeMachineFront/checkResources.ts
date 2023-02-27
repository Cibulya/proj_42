import { water, beans, wastePlace } from './manageResources';

function checkResources() {
  const resources = [water, beans, wastePlace];
  const indicators = [
    document.querySelector('.indicator__water'),
    document.querySelector('.indicator__beans'),
    document.querySelector('.indicator__waste'),
  ];

  const msg = document.querySelector('.message');
  msg.innerHTML = '';
  const msgNoResources = [
    'Add water (press "W"). ',
    'Add coffee beans (press "B"). ',
    'Empty waste container (press "E").',
  ];
  const drinks = document.querySelector('.control__middle');

  for (let i = 0; i < resources.length; i++) {
    if (!resources[i]) {
      indicators[i].classList.add('active');
      msg.innerHTML += msgNoResources[i];
      drinks.classList.add('hidden');
    }
  }

  return;
}

export default checkResources;
