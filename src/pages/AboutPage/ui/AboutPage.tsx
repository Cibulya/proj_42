import React from 'react';
import CoffeeMachineBack from 'components/coffeeMachineBack/coffeeMachineBack';

const AboutPage = () => {
  const dark = document.querySelector('.dark');
  let bg: string;
  !dark ? bg = 'bgback' : bg = 'bgack-night';

  return (
    <div className = "container">
      <div className={bg}></div>
      <CoffeeMachineBack/>
    </div>
  );
};

export default AboutPage;