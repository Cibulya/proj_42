import React from 'react';
import CanvasClock from 'components/canvasClock';
import CoffeeMachineBack from 'components/coffeeMachineBack/coffeeMachineBack';

const AboutPage = () => {
  return (
    <div>
      <CanvasClock id="canvas" top="5" left="-15" width="100" height="50" fontSize = "14"/>
      <CoffeeMachineBack/>
    </div>
  );
};

export default AboutPage;