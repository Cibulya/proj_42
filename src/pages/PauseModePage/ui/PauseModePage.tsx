import React from 'react';
import CoffeeMachineFront from 'components/coffeeMachineFront/coffeeMachineFront';
import 'styles/coffeeMachineFront.scss';
import ChooseColor from 'components/coffeeMachineFront/chooseColor';

const PauseModePage = () => {

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
