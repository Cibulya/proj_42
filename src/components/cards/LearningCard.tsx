import React from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LearningSteps } from 'fonts/LearningSteps';
import { turnOff } from 'components/coffeeMachineFront/onOffBtn';
import { removeCup } from 'components/cup/finishPreparation';
import { API } from 'Api';
import AppLink from 'components/Header/Navbar/AppLink/AppLink';
import { Howler } from 'howler';

export type ModalStateType = {
  text: string;
  picture: string;
  buttonOne: string;
  buttonTwo: string;
};
interface CardProps {
  progress?: number;
  state?: ModalStateType;
  className?: string;
  callback?: (index: number) => void;
}

const LearningCard = (props: CardProps) => {
  const { t } = useTranslation();
  const raiseProgress = (ind: number) => {
    if (ind === LearningSteps.length) {
      props.callback(ind - 1);
      window.open('https://www.youtube.com/watch?v=OBGxt8zhbRk');
      Howler.stop();
      setTimeout(() => {
        API.logoutUser().then((data) => {});
      }, 0);
    } else props.callback(ind);
  };
  return (
    <div className={classNames('card', {}, [`${props.className}`])}>
      {props.state.text !== '' ? <p>{t(`${props.state.text}`)}</p> : <></>}
      {props.state.picture !== '' ? (
        <img src={props.state.picture} width="280px" height="200px" alt="MVC model" />
      ) : (
        <></>
      )}
      {props.state.buttonOne !== '' ? (
        <button
          className="learning__btn"
          onClick={(event) => {
            if (t(`${props.state.buttonOne}`) !== 'Repeat') {
              raiseProgress(props.progress + 1);
            } else {
              const onBtn = document.querySelector('.onBtn');
              if (onBtn.getAttribute('aria-pressed') === 'true') turnOff();
              if (removeCup) removeCup();
              raiseProgress(0);
              API.logoutUser().then((data) => {});
              const authIcon = document.querySelector('.auth-icon');
              const account = document.querySelector('.account');
              (authIcon as HTMLElement).style.backgroundImage =
                "url('https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/user.png')";
              account.innerHTML = 'My Account';
            }
          }}
        >
          {t(`${props.state.buttonOne}`)}
        </button>
      ) : (
        <></>
      )}
      {props.state.buttonTwo !== '' && props.state.buttonTwo !== 'Statistic' ? (
        <button
          className="learning__btn"
          onClick={(event) => {
            if (props.state.buttonTwo !== '') raiseProgress(props.progress + 1);
          }}
        >
          {t(`${props.state.buttonTwo}`)}
        </button>
      ) : props.state.buttonTwo === 'Statistic' ? (
        <AppLink to={'/statistic'}>
          <button className="learning__btn">{t(`${props.state.buttonTwo}`)}</button>
        </AppLink>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LearningCard;
