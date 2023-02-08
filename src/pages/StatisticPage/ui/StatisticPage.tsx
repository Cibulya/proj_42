import React from 'react';
import CanvasClock from 'components/canvasClock';

const StatisticPage = () => {
  return (
    <div>
      <CanvasClock id="canvas" top="5" left="-15" width="100" height="50" fontSize = "14"/>
    </div>
  );
};

export default StatisticPage;