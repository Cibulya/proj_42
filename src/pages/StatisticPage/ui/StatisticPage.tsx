import React from 'react';
import Statistics from 'components/statistics/statistics';
import { Howler } from 'howler';

const StatisticPage = () => {
  Howler.stop();
  return (
    <div className="statistic">
      <Statistics />
    </div>
  );
};

export default StatisticPage;
