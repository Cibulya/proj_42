import * as React from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export default function ToggleButtons() {
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
        if (document.querySelector('.control__middle').previousElementSibling.getAttribute("aria-pressed") === "true") {
          {handleAlignment};
          console.log('Выбран напиток');
        }
      }
      }
      aria-label="text alignment"
    >
      <ToggleButton value="left" className = "drink espresso">
      </ToggleButton>
      <ToggleButton value="center" className = "drink americano">
      </ToggleButton>
      <ToggleButton value="right" className = "drink cappuccino">
      </ToggleButton>
      <ToggleButton value="left2" className = "drink latte">
      </ToggleButton>
      <ToggleButton value="center2" className = "drink macciato">
      </ToggleButton>
      <ToggleButton value="right2" className = "drink mocha">
      </ToggleButton>
      
    </ToggleButtonGroup>
  );
}