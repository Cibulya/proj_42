import React from 'react';
import { ToggleButton } from '@mui/material';
import { sound } from "../sound/allSounds";


function TurnOnOff() {
  const [selected, setSelected] = React.useState(false);

  const indicators = document.getElementsByClassName('active');
  while (indicators.length) {
    indicators[0].classList.remove('active')
  }

  const msg = document.querySelector('.message');
  const drinks = document.querySelector('.control__middle');
  const modal = document.querySelector('.card');
  
  if (msg && msg.innerHTML === 'Turn on the coffee machine' && selected) {
    msg.innerHTML = 'Choose coffee';
  } else if (msg && modal) {
    msg.innerHTML = '';
    (drinks as HTMLElement).style.width = '0px';
  } else if (msg && !modal) {
    msg.innerHTML = 'Turn on the coffee machine';
    (drinks as HTMLElement).style.width = '0px';
  }

  function toggle() {
    const drinks = document.querySelector('.control__middle');
    const screen = document.querySelector('.control__screen');
    const authIcon = document.querySelector('.auth-icon');
    const auth = document.querySelector('.auth');

    if (!selected) {
      if (modal) {
        (authIcon as HTMLElement).style.display = 'block';
        (drinks as HTMLElement).style.width = '0px';
        (drinks as HTMLElement).style.flex = '0';
        (screen as HTMLElement).style.display = 'none';
      } else {
        (auth as HTMLElement).style.display = 'none';
        (drinks as HTMLElement).style.width = '100%';
        (drinks as HTMLElement).style.flex = '1';
        (screen as HTMLElement).style.display = 'none';
      }
    } else {
      (auth as HTMLElement).style.display = 'none';
      (drinks as HTMLElement).style.width = '0px';
      (drinks as HTMLElement).style.flex = '0';
      (screen as HTMLElement).style.display = 'flex';
    }
    setSelected(!selected);
    sound.play('onOff');
    const btn = event.target;
    (btn as HTMLButtonElement).disabled = true;
    setTimeout(() => {
      (btn as HTMLButtonElement).disabled = false;
    }, 1000)

    authIcon.addEventListener('click', () => {
      (auth as HTMLElement).style.display = 'flex';
    })
    }

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => toggle() }
      className="onBtn"
    >
      <div className = "control__onOff"></div>
    </ToggleButton>
  );
}
export default TurnOnOff;