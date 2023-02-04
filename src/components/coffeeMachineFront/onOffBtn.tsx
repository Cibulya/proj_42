import React from 'react';
import { ToggleButton } from '@mui/material';


const TurnOnOff = function () {
    const [selected, setSelected] = React.useState(false);

    return (
      <ToggleButton
        value="check"
        selected={selected}
        onChange={() => {
            setSelected(!selected);
            console.log('Вкл/выкл');
        }}
      >
        <div className = "control__onOff"></div>
      </ToggleButton>
    );
  }
  export default TurnOnOff;