import { sound } from '../sound/allSounds';
import finishPreparation from './finishPreparation';


function addCup(enjoy: string, choose: string) {
  const cup = document.querySelector('.wrapper');
  (cup as HTMLElement).style.display = 'flex';

  let start = 0;
  requestAnimationFrame(function measure(time) {
    if (start === 0) start = time;
    const progress = (time - start) / 500;
    const translate = progress * 5.5;
    (cup as HTMLElement).style.margin = `0 ${translate}vh`;
    if (progress < 1) requestAnimationFrame(measure);
  });

  sound.play('cup-on-shell');
  setTimeout(() => {
    sound.play('making-coffee');
  }, 1000);

  finishPreparation(enjoy, choose);

  return;
}

export default addCup;
