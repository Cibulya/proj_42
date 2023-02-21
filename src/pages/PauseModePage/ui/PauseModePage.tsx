import React from 'react';
import CoffeeMachineFront from 'components/coffeeMachineFront/coffeeMachineFront';
import 'styles/coffeeMachineFront.scss';
import ChooseColor from 'components/coffeeMachineFront/chooseColor';

const PauseModePage = () => {
  const background = document.querySelector('.app');
  const theme = document.querySelector('.theme-switcher');
  background.classList.remove('main');
  background.classList.remove('chip');
	background.classList.add('table');
  theme.addEventListener('click', () => background.classList.add('table'));


	return (
		<div className='pause-mode'>
			<div className = "container">
        <CoffeeMachineFront/>
      	<div className = "invitation">It's a wonderful day! Enjoy your pause and drink a cup of coffee. First turn on the Coffee Machine and choose your drink.</div>
        <ChooseColor/>
      </div>
		</div>
	);
};

export default PauseModePage;
