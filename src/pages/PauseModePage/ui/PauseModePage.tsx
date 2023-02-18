import React from 'react';
import CoffeeMachineFront from 'components/coffeeMachineFront/coffeeMachineFront';
import 'styles/coffeeMachineFront.scss';

const PauseModePage = () => {
  const dark = document.querySelector('.dark');
  let bg: string;
  !dark ? bg = 'bg' : bg = 'bg-night';

	return (
		<div className='pause-mode'>
      <div className={bg}></div>
			<div className = "container">
        <CoffeeMachineFront/>
      	<div className = "invitation">It's a wonderful day! Enjoy your pause and drink a cup of coffee. First turn on the Coffee Machine and choose your drink.</div>
      </div>
		</div>
	);
};

export default PauseModePage;
