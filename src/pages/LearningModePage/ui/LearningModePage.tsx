import React, { useState } from 'react';
import LearningCard, { ModalStateType } from 'components/cards/LearningCard';
import { classNames } from 'helpers/classNames/classNames';
import { LearningSteps } from 'fonts/LearningSteps';
import { useTranslation } from 'react-i18next';
import CoffeeMachineFront from 'components/coffeeMachineFront/coffeeMachineFront';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import SignForm from 'components/auth/SignForm';
import Weather from 'weatherWidget/Weather';
import Radio from 'components/sound/radio';
import Authorization from 'components/auth/Authorization';
import UserSettingsForm from 'components/auth/UserSettingsForm';
import 'styles/SignUp.scss'

export interface LearningPropsType {
	modalCenter?: ModalStateType;
	modalLeft?: ModalStateType;
	modalRightTop?: ModalStateType;
	modalRightBottom?: ModalStateType;
}

let score = 0;

const LearningModePage = () => {
  //const header = document.querySelector('.header');
  //header.setAttribute('style', 'display: flex !important')

	const { t } = useTranslation();
	const [progress, setProgress] = useState(0);
	const state = LearningSteps[progress];
	const modals = Object.entries(state);

  const machine = document.querySelector('.machine');
  const msg = document.querySelector('.message');
  const modal = document.getElementsByClassName('card');
  const btn = document.querySelector('.learning__btn');
  const auth = document.querySelector('.auth');
  const authIcon = document.querySelector('.auth-icon');
  const drinks = document.querySelector('.control__middle');
  const screen = document.querySelector('.control__screen');
  const login = document.querySelector('.login');
  const settings = document.querySelector('.settings');
  const answers = [
    ['right__machine', 'wrong__modal', 'wrong__modal'],
    ['wrong__machine', 'right__modal', 'wrong__modal'],
    ['wrong__machine', 'wrong__modal', 'right__modal']
  ]

  function openAuth() {
        (login as HTMLElement).style.display = 'flex';
        (settings as HTMLElement).style.display = 'none';
      }

  switch (progress) {
    case 1:
      if (authIcon) authIcon.addEventListener('click', openAuth);

      const form = document.querySelector('.form');
      if (form) form.addEventListener('submit', () => {
        if (authIcon) authIcon.removeEventListener('click', openAuth);
        (login as HTMLElement).style.display = 'none';
      })



      if (authIcon) authIcon.addEventListener('click', () => {
        
        (settings as HTMLElement).style.display = 'flex';
        form.addEventListener('submit', () => {
          (settings as HTMLElement).style.display = 'none';
          if (settings) setProgress(progress + 1);
        })
      })

    case 4:
      machine.classList.add('blink__machine');
      btn.addEventListener('click', () => { machine.classList.remove('blink__machine'); })
      break;
    case 5:
      machine.classList.add('blink__machine');
      setTimeout(() => {
        if (machine) machine.classList.remove('blink__machine');
        if (modal[1]) modal[1].classList.add('blink__modal');
      }, 3000)
      setTimeout(() => {
        if (modal[1]) modal[1].classList.remove('blink__modal');
        if (modal[2]) modal[2].classList.add('blink__modal');
      }, 6000)
      setTimeout(() => {
        if (modal[2]) modal[2].classList.remove('blink__modal');
      }, 9000)
      break;
    case 6:
      if (authIcon) (authIcon as HTMLElement).style.display = 'none';
      (screen as HTMLElement).style.display = 'none';
      setTimeout(() => {drinks.classList.remove('hidden');}, 0)
      drinks.addEventListener('click', () => {
        setProgress(progress + 1)
        msg.innerHTML = '';
      })
      break;
    case 7:
    case 8:
    case 9:
    case 10:
      setTimeout(() => {
        setProgress(progress + 1)
        msg.innerHTML = '';
      }, 3000)
      break;
    case 11:
      setTimeout(() => { setProgress(progress + 1) }, 7000)
      score = 0;
      break;
    case 13:
    case 16:
      setBlick(0);
      break;
    case 14:
      setBlick(2);
      break;
    case 15:
    case 17:
      setBlick(1);
      break;
    case 18:
      setTimeout(() => {
        const finishMsg = document.querySelector('.modalCenter');
        if (finishMsg) finishMsg.innerHTML += `QUIZ RESULT: You got ${score}/5 points!`;
      }, 0);
      const bonus = document.querySelector('.bonus');
      (bonus as HTMLElement).style.display = 'flex';
      break;
    default:
  }

  function setBlick(i: number) {
    document.addEventListener('keydown', function(event) {
      removeBlick();
      if (event.code == 'KeyV') machine.classList.add(answers[i][0]);
      if (event.code == 'KeyC') modal[1].classList.add(answers[i][1]);
      if (event.code == 'KeyM') modal[2].classList.add(answers[i][2]);
      setTimeout(() => { 
        removeBlick();
        setProgress(progress + 1);
      }, 1500)
    }, {once: true});
    setTimeout(() => { msg.innerHTML = "VIEW"; }, 0)
  }

  function removeBlick() {
    countScore();
    machine.classList.remove('right__machine');
    machine.classList.remove('wrong__machine');
    modal[1].classList.remove('right__modal');
    modal[1].classList.remove('wrong__modal');
    modal[2].classList.remove('right__modal');
    modal[2].classList.remove('wrong__modal');
  }

  function countScore() {
    if (machine && modal[1] && modal [2]) {
      if (machine.getAttribute('class').includes('right__machine') || 
        modal[1].getAttribute('class').includes('right__modal') || 
        modal[2].getAttribute('class').includes('right__modal')) score++
    }
  }

	return (
		<div className={classNames('learning-mode')}>
      {
        <Box className={classNames('progress')} sx={{ width: '80%' }}>
				  <LinearProgress color="secondary" variant="buffer" value={progress / 18 * 100} valueBuffer={100} />
			  </Box>
      }
      <Authorization className={'card login'} />
      <UserSettingsForm className={'card settings'} />
			{LearningSteps.length > progress
				? modals.map((modal) => {
					if (modal[1].text !== '') {
            console.log(progress)
						return (
							<LearningCard key={`${modal[0]}-index`}
										  className={classNames(`${modal[0]}`,
											  {},
											  [`${modal[1].picture !== '' ? 'withImg' : ''}`])}
										  callback={setProgress}
										  progress={progress}
										  state={modal[1]}></LearningCard>
						);
					}
				}
			)
			: <></>
			}
      {
        <div className='learning__machine'>
          <CoffeeMachineFront/>
        </div>
      }
      <div className='bonus'>
        <Weather/>
        <Radio/>
      </div>
		</div>
	);
}
	;

	export default LearningModePage;