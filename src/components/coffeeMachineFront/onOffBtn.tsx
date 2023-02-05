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

    return (
        <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
                setSelected(!selected);
                sound.play('onOff');
                console.log('Вкл/выкл');
            }}
        >
            <div className = "control__onOff"></div>
        </ToggleButton>
    );
  }
  export default TurnOnOff;