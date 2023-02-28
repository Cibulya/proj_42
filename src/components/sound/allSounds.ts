import { Howl } from 'howler';

export const sound = new Howl({
  src: [
    'https://github.com/MarinaKovel/coffeemachinedata/blob/main/Sounds/Sound.webm?raw=true',
    'https://github.com/MarinaKovel/coffeemachinedata/blob/main/Sounds/Sound.mp3?raw=true',
  ],
  sprite: {
    container: [0, 936.0090702947846],
    'cup-on-shell': [2000, 2246.5306122448983],
    fillcup: [6000, 2519.9999999999995],
    grains: [10000, 3960.000000000001],
    'making-coffee': [15000, 6269.387755102041],
    onOff: [23000, 522.448979591836],
    secret: [25000, 2717.800453514741],
    sugar: [29000, 5459.591836734696],
    water: [36000, 1854.6938775510214],
  },
});
