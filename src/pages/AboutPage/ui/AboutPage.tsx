import React from 'react';
import CoffeeMachineBack from 'components/coffeeMachineBack/coffeeMachineBack';

const AboutPage = () => {
  const background = document.querySelector('.app');
  background.classList.remove('main');
  background.classList.remove('chip');
	background.classList.add('table')

  return (
    <div className = "container">
      <CoffeeMachineBack/>
    </div>
  );
};

export default AboutPage;