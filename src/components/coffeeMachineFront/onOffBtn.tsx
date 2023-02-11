import React from 'react';
import { ToggleButton } from '@mui/material';
import { sound } from "../sound/allSounds";


function TurnOnOff() {
    const [selected, setSelected] = React.useState(false);

    const indicators = document.getElementsByClassName('active');
    while (indicators.length) {
        indicators[0].classList.remove('active')
    }

    const msg = document.querySelector('.control__screen');
    if (msg && msg.innerHTML === 'Turn on the coffee machine') {
        msg.innerHTML = 'Choose coffee';
    } else if (msg) {
        msg.innerHTML = 'Turn on the coffee machine';
    }

    function toggle() {
        const drinks = document.querySelector('.control__middle');
        const screen = document.querySelector('.control__screen');

        if (!selected) {
            (drinks as HTMLElement).style.flex = '2';
            (screen as HTMLElement).style.display = 'none';
        } else {
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