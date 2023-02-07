import React from 'react';
import { water, grains, wastePlace } from './manageResources';

function CheckResources() {
    let resources = [water, grains, wastePlace];
    let indicators = [
        document.querySelector('.indicator__water'), 
        document.querySelector('.indicator__grains'), 
        document.querySelector('.indicator__waste')
    ];

    const msg = document.querySelector('.control__screen');
    msg.innerHTML = '';
    const msgNoResources = ['Add water. ', 'Add coffee grains. ', 'Empty waste container'];

    for (let i = 0; i < resources.length; i++) {
        if (!resources[i]) {
            indicators[i].classList.add('active');
            msg.innerHTML += msgNoResources[i];
        }
    }

    return;
  }

  export default CheckResources;