import { BgParticles } from 'components/secretBg/secretBg';
import '../../../styles/secretPage.scss';

function bigWindow(event: any) {
  const targeEl = event.currentTarget;
  const wrapper = targeEl.closest('.secret');
  const newEl = targeEl.cloneNode(targeEl);
  const imageLink = window.getComputedStyle(targeEl, null).backgroundImage;
  const artDescription = targeEl.cloneNode(targeEl);
  const artContainer = targeEl.cloneNode(targeEl);
  artContainer.className = 'fullscreen__art';
  artContainer.style.backgroundImage = imageLink;
  artDescription.className = 'fullscreen__desc';
  artDescription.innerText = 'Prototype image #42069';
  newEl.className = 'fullscreen__image';
  newEl.append(artDescription, artContainer);
  console.log(imageLink);
  wrapper.append(newEl);
  targeEl.classList.add('bigscreen');
  newEl.addEventListener('click', () => {
    targeEl.classList.remove('bigscreen');
    newEl.style.transform = 'scale(0)';
    newEl.remove();
  });
}

const SecretPage = () => {
  return (
    <div className="secret">
      <div className="secret__content" id="particles">
        <h1 className="secret__title">This is Secret page</h1>
        <p className="secret__subtitle">Here we show some concept arts of this app</p>
        <div className="content__gallery">
          <div onClick={bigWindow} className="back art"></div>
          <div onClick={bigWindow} className="left art"></div>
          <div onClick={bigWindow} className="right art"></div>
          <div onClick={bigWindow} className="top art"></div>
          <div onClick={bigWindow} className="bottom art"></div>
          <div onClick={bigWindow} className="front art"></div>
        </div>
      </div>
      <BgParticles />
    </div>
  );
};

export default SecretPage;
