import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import CheckResources from './checkResources';
import AddCup from './AddCup';
import { water, grains, wastePlace, reduceResources } from './manageResources';


function ChooseCoffee() {
    const [alignment, setAlignment] = React.useState<string | null>('left');

    const handleAlignment = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string | null,
    ) => {
        setAlignment(newAlignment);
    };

  return (
    <ToggleButtonGroup
        className = "control__middle"
        value={alignment}
        exclusive
        onChange={() => {
            const coffee = (event.target as HTMLElement).getAttribute('value');
            const msg = document.querySelector('.control__screen');
            const isOn = document.querySelector('.control__middle').previousElementSibling.getAttribute("aria-pressed");

            if (isOn === "true") {
                CheckResources();
                if (water > 0 && grains > 0 && wastePlace > 0) {
                    {handleAlignment};
                    AddCup();
                    console.log('Выбран напиток ' + coffee);
                    msg.innerHTML = `Preparing ${coffee}...`;
                    const onBtn = document.getElementsByClassName('onBtn');
                    (onBtn[0] as HTMLButtonElement).disabled = true;
                    const drinks = document.getElementsByClassName('drink');
                    for (let i = 0; i < drinks.length; i++) {
                        (drinks[i] as HTMLButtonElement).disabled = true;
                    }
                    reduceResources();
                }
            }
        }
        }
    >
        <ToggleButton value="espresso" className = "drink espresso">
        </ToggleButton>
        <ToggleButton value="americano" className = "drink americano">
        </ToggleButton>
        <ToggleButton value="cappuccino" className = "drink cappuccino">
        </ToggleButton>
        <ToggleButton value="latte" className = "drink latte">
        </ToggleButton>
        <ToggleButton value="macciato" className = "drink macciato">
        </ToggleButton>
        <ToggleButton value="mocha" className = "drink mocha">
        </ToggleButton>
    </ToggleButtonGroup>
  );
}

export default ChooseCoffee;