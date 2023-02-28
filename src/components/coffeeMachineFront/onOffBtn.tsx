import React from 'react';
import { modalClasses, ToggleButton } from '@mui/material';
import { sound } from '../sound/allSounds';
import { useTranslation } from 'react-i18next';

export let turnOff: Function;

function TurnOnOff() {
  const [selected, setSelected] = React.useState(false);
  const { t } = useTranslation();

  const indicators = document.getElementsByClassName('active');
  while (indicators.length) {
    indicators[0].classList.remove('active');
  }

  const invitation = document.querySelector('.invitation');
  const chooseMessage = document.querySelector('.choose__message');
  const msg = document.querySelector('.message');
  const drinks = document.querySelector('.control__middle');
  const modal = document.querySelector('.card');

  if (msg && msg.innerHTML === t(`pause-turnon`) && selected) {
    msg.innerHTML = t(`pause-choose`);
    (invitation as HTMLElement).style.display = 'none';
    (chooseMessage as HTMLElement).style.display = 'flex';
  } else if (msg && modal) {
    msg.innerHTML = '';
    drinks.classList.add('hidden');
  } else if (msg && !modal) {
    msg.innerHTML = t(`pause-turnon`);
    drinks.classList.add('hidden');
    (invitation as HTMLElement).style.display = 'flex';
    (chooseMessage as HTMLElement).style.display = 'none';
  }

  const toggle = function () {
    const drinks = document.querySelector('.control__middle');
    const screen = document.querySelector('.control__screen');
    const authIcon = document.querySelector('.auth-icon');
    const auth = document.querySelector('.auth');

    if (!selected) {
      if (modal && !modal.innerHTML.includes('Pause')) {
        (authIcon as HTMLElement).style.display = 'block';
        (screen as HTMLElement).style.display = 'none';
        drinks.classList.add('hidden');
      } else {
        if (auth) (auth as HTMLElement).style.display = 'none';
        (screen as HTMLElement).style.display = 'none';
        drinks.classList.remove('hidden');
      }
    } else {
      if (auth) (auth as HTMLElement).style.display = 'none';
      (screen as HTMLElement).style.display = 'flex';
      drinks.classList.add('hidden');
    }
    setSelected(!selected);
    sound.play('onOff');
    const btn = event.target;

    (btn as HTMLButtonElement).disabled = true;
    setTimeout(() => {
      if (!modal) (btn as HTMLButtonElement).disabled = false;
    }, 1000);

    authIcon.addEventListener('click', () => {
      if (auth) (auth as HTMLElement).style.display = 'flex';
    });
  };
  turnOff = toggle;

  return (
    <ToggleButton value="check" selected={selected} onChange={() => toggle()} className="onBtn">
      <div className="control__onOff"></div>
    </ToggleButton>
  );
}
export default TurnOnOff;
