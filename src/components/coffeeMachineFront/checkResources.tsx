import React from 'react';
import { water, grains, wastePlace } from './chooseCoffee';

function CheckResources() {
    let resources = [water, grains, wastePlace];
    let indicators = [
        document.querySelector('.indicator__water'), 
        document.querySelector('.indicator__grains'), 
        document.querySelector('.indicator__waste')
    ];

    const msg = document.querySelector('.control__screen');
    const msgNoResources = ['Add water. ', 'Add coffee grains. ', 'Empty waste container'];
    if (!resources[0] || !resources[1] || !resources[2]) {
        msg.innerHTML = '';
    }

    for (let i = 0; i < resources.length; i++) {
        if (!resources[i]) {
            indicators[i].classList.add('active');
            msg.innerHTML += msgNoResources[i];
        }
    }

    return;
  }

  export default CheckResources;