import React, { useState, useEffect } from 'react';
import LearningCard, { ModalStateType } from 'components/cards/LearningCard';
import { classNames } from 'helpers/classNames/classNames';
import { LearningSteps } from 'fonts/LearningSteps';
import { useTranslation } from 'react-i18next';
import CoffeeMachineFront from 'components/coffeeMachineFront/coffeeMachineFront';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Weather from 'weatherWidget/Weather';
import Radio from 'components/sound/radio';
import Authorization from 'components/auth/Authorization';
import UserSettingsForm from 'components/auth/UserSettingsForm';
import { StatsType } from 'components/statistics/statistics';
import { API } from 'Api';
import 'styles/SignUp.scss';

export interface LearningPropsType {
  modalCenter?: ModalStateType;
  modalLeft?: ModalStateType;
  modalRightTop?: ModalStateType;
  modalRightBottom?: ModalStateType;
}

let score = 0;

const LearningModePage = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);
  const state = LearningSteps[progress];
  const modals = Object.entries(state);

  const machine = document.querySelector('.learning__machine');
  const msg = document.querySelector('.message');
  const modal = document.getElementsByClassName('card');
  const btn = document.querySelector('.learning__btn');
  const authIcon = document.querySelector('.auth-icon');
  const drinks = document.querySelector('.control__middle');
  const screen = document.querySelector('.control__screen');
  const login = document.querySelector('.sign-wrapper.card.login');
  const settings = document.querySelector('.sign-wrapper.card.settings');
  const answers = [
    ['right__machine', 'wrong__modal', 'wrong__modal'],
    ['wrong__machine', 'right__modal', 'wrong__modal'],
    ['wrong__machine', 'wrong__modal', 'right__modal'],
  ];
  const [initialState, setInitialState] = useState<StatsType>({
    email: '',
    quizStatus: 0,
    coffeeStatus: '',
  });
  const msgNoResources = [t('pause-water'), t('pause-beans'), t('pause-empty')];
  function openAuth() {
    (login as HTMLElement).style.display = 'flex';
    (settings as HTMLElement).style.display = 'none';
  }
  function openSettings() {
    (settings as HTMLElement).style.display = 'flex';
  }

  useEffect(() => {
    API.getUser().then((data) => {
      if (data && !data.hasOwnProperty('message')) {
        setInitialState({
          ...initialState,
          email: data.email,
        });
      }
    });
  }, []);

  switch (progress) {
    case 1:
      const onBtn = document.querySelector('.onBtn');
      onBtn.addEventListener('click', () => setProgress(progress + 1));
      break;
    case 2:
      if (authIcon) authIcon.addEventListener('click', openAuth);
      const form = document.querySelector('.form');
      const close = document.querySelector('.close');
      if (form)
        form.addEventListener('submit', () => {
          if (authIcon) authIcon.removeEventListener('click', openAuth);
          if (authIcon) authIcon.addEventListener('click', openSettings);
        });
      (close as HTMLButtonElement).addEventListener('click', () => {
        (modal[1] as HTMLElement).style.display = 'none';
        (authIcon as HTMLElement).style.animation = 'none';
        setTimeout(() => {
          (authIcon as HTMLElement).style.display = 'none';
          (screen as HTMLElement).style.display = 'flex';
          setProgress(progress + 1);
        }, 2000);
      });
      break;
    case 5:
      machine.classList.add('blink__machine');
      btn.addEventListener('click', () => {
        machine.classList.remove('blink__machine');
      });
      break;
    case 6:
      machine.classList.add('blink__machine');
      setTimeout(() => {
        if (machine) machine.classList.remove('blink__machine');
        if (modal[3]) modal[3].classList.add('blink__modal');
      }, 3000);
      setTimeout(() => {
        if (modal[3]) modal[3].classList.remove('blink__modal');
        if (modal[4]) modal[4].classList.add('blink__modal');
      }, 6000);
      setTimeout(() => {
        if (modal[4]) modal[4].classList.remove('blink__modal');
      }, 9000);
      break;
    case 7:
      if (authIcon) (authIcon as HTMLElement).style.display = 'none';
      (screen as HTMLElement).style.display = 'none';
      setTimeout(() => {
        drinks.classList.remove('hidden');
      }, 0);
      drinks.addEventListener('click', () => {
        setProgress(progress + 1);
        msg.innerHTML = '';
        const newCoffeeStatus = ((event.target as HTMLElement).parentElement as HTMLButtonElement).value;
        const coffeeBody = {
          email: initialState.email,
          coffeeStatus: newCoffeeStatus,
        };
        API.updateCoffeeStatus(coffeeBody).then((data) => {});
      });
      break;
    case 8:
    case 9:
    case 10:
    case 11:
      setTimeout(() => {
        setProgress(progress + 1);
        msg.innerHTML = '';
      }, 3000);
      break;
    case 12:
      setTimeout(() => {
        setProgress(progress + 1);
      }, 7000);
      score = 0;
      break;
    case 14:
    case 17:
      setBlick(0);
      break;
    case 15:
      setBlick(2);
      break;
    case 16:
    case 18:
      setBlick(1);
      break;
    case 19:
      setTimeout(() => {
        const finishMsg = document.querySelector('.modalCenter');
        if (finishMsg && !finishMsg.innerHTML.includes('QUIZ'))
          finishMsg.prepend(`QUIZ RESULT: You got ${score}/5 points.`);
        const scoreBody = {
          email: initialState.email,
          quizStatus: score,
        };
        API.updateQuizStatus(scoreBody).then((data) => {});
      }, 0);
      const bonus = document.querySelector('.bonus');
      (bonus as HTMLElement).style.display = 'flex';
      break;
    default:
  }

  function setBlick(i: number) {
    setTimeout(() => {
      const elements = [machine, modal[3], modal[4]];
      removeBlick();
      elements.forEach((element) => element.addEventListener('click', showAnswer, { once: true }));
      function showAnswer() {
        elements.forEach((element) => element.removeEventListener('click', showAnswer));
        elements.forEach((element: HTMLElement, index: number) => {
          if (element === event.currentTarget) (event.currentTarget as HTMLElement).classList.add(answers[i][index]);
        });
        setTimeout(() => {
          removeBlick();
          setProgress(progress + 1);
        }, 1500);
      }
    }, 0);

    document.addEventListener(
      'keydown',
      function (event) {
        removeBlick();
        if (event.code == 'KeyV') machine.classList.add(answers[i][0]);
        if (event.code == 'KeyC') modal[3].classList.add(answers[i][1]);
        if (event.code == 'KeyM') modal[4].classList.add(answers[i][2]);
        setTimeout(() => {
          removeBlick();
          setProgress(progress + 1);
        }, 1500);
      },
      { once: true }
    );
    setTimeout(() => {
      msg.innerHTML = 'VIEW';
    }, 0);
  }

  function removeBlick() {
    countScore();
    machine.classList.remove('right__machine');
    machine.classList.remove('wrong__machine');
    modal[3].classList.remove('right__modal');
    modal[3].classList.remove('wrong__modal');
    modal[4].classList.remove('right__modal');
    modal[4].classList.remove('wrong__modal');
  }

  function countScore() {
    if (machine && modal[1] && modal[2]) {
      if (
        machine.getAttribute('class').includes('right__machine') ||
        modal[3].getAttribute('class').includes('right__modal') ||
        modal[4].getAttribute('class').includes('right__modal')
      )
        score++;
    }
  }
  const enjoy = t('pause-finish');
  const choose = t('pause-choose');

  return (
    <div className={classNames('learning-mode')}>
      {
        <Box className={classNames('progress')} sx={{ width: '100%' }}>
          <LinearProgress color="secondary" variant="buffer" value={(progress / 19) * 100} valueBuffer={100} />
        </Box>
      }
      <Authorization className={'card login'} />
      <UserSettingsForm className={'card settings'} />
      {LearningSteps.length > progress ? (
        modals.map((modal) => {
          if (modal[1].text !== '') {
            return (
              <LearningCard
                key={`${modal[0]}-index`}
                className={classNames(`${modal[0]}`, {}, [`${modal[1].picture !== '' ? 'withImg' : ''}`])}
                callback={setProgress}
                progress={progress}
                state={modal[1]}
              ></LearningCard>
            );
          }
        })
      ) : (
        <></>
      )}
      {
        <div className="learning__machine">
          <CoffeeMachineFront msgNoResources={msgNoResources} enjoy={enjoy} choose={choose} />
        </div>
      }
      <div className="bonus">
        <Weather />
        <Radio />
      </div>
    </div>
  );
};
export default LearningModePage;
