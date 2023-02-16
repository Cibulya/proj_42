import React from 'react';
import CoffeeMachineFront from 'components/coffeeMachineFront/coffeeMachineFront';
import Radio from 'components/sound/radio';
import 'styles/coffeeMachineFront.scss';

const PauseModePage = () => {
	return (
		<div className='pause-mode'>
			<div className = "container">
      <div className = "invitation">It's a wonderful day! Enjoy your pause and drink a cup of coffee. First turn on the Coffee Machine and choose your drink.</div>
      <CoffeeMachineFront/>
      <Radio/>
    </div>
		</div>
	);
};

export default PauseModePage;
