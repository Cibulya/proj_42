import React from 'react';
import { classNames } from 'helpers/classNames/classNames';
import StartCard from 'components/cards/StartCard';


const MainPage = () => {
	const background = document.querySelector('.app');
	background.classList.remove('table');
  	background.classList.remove('chip');
	background.classList.add('main')

	return <div className='main-page'>
		<div className={classNames('cards')}>
			<StartCard to={'/pause'} linkTitle={'Pause Mode'}></StartCard>
			<StartCard to={'/learning'} linkTitle={'Learning Mode'}></StartCard>
		</div>
	</div>;
};

export default MainPage;
