import React from 'react';
import { Howl } from "howler";
import ToggleButton from '@mui/material/ToggleButton';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';


let radio: null | Howl = null;

function Radio() {
  const [selected, setSelected] = React.useState(false);

  function playRadio() {
    if (radio != null) {
      radio.stop();
      radio.unload();
      radio = null;
      handleSliderChange(event, 30);
    } else {
      radio = new Howl({
      src: ['https://stream.nightride.fm/nightride.mp3'],
      html5: true,
      volume: 0.5
    });
    radio.play();
    }
  }

  const [value, setValue] = React.useState<number | string | Array<number | string>>(30);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue);
    const newVolume = +((newValue as number) / 100).toFixed(1);
    if (radio) radio.volume(newVolume);
  };

  return (
    <div className="music__container">
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              playRadio();
              setSelected(!selected);
            }}
            className="radio"
            > Music ON/OFF
          </ToggleButton>
        </Grid>
        <Grid item className="volume__icon"></Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            color="secondary"
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Radio;