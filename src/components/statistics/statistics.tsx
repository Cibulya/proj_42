import React, { useState, useEffect } from 'react';
import { API } from 'Api';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import 'styles/statistics.scss';
import { useTranslation } from 'react-i18next';

export type StatsType = {
  quizStatus: number;
  coffeeStatus: string;
  email?: string;
};

const Statistics = () => {
  const [initialState, setInitialState] = useState<StatsType>({
    quizStatus: 0,
    coffeeStatus: 'No',
  });
const { t } = useTranslation();

  function getStats() {
    useEffect(() => {
      API.getUser().then((data) => {
        if (data && !data.hasOwnProperty('message')) {
          setInitialState({
            ...initialState,
            quizStatus: data.quizStatus,
            coffeeStatus: data.coffeeStatus,
          });
        }
      });
    }, []);
  }
  getStats();

  return (
    <div className="container__stats">
      <div className="stats">
        <h1>{t(`Statistic`)}</h1>
        <div className="stats__content">
          <div className="stats__quiz">
            <h2>{t(`stats-title-1`)}</h2>
            <Stack spacing={1}>
              <Rating name="half-rating-read" value={+initialState.quizStatus} precision={1} size="large" readOnly />
            </Stack>
            <p className="stats__score">{t(`stats-text`)}</p>
          </div>
          <div className="stats__coffee">
            <h2>{t(`stats-title-2`)}</h2>
            <p className="stats__score">{initialState.coffeeStatus}</p>
            <img
              className="coffee__img"
              src={`https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/coffee-types/${initialState.coffeeStatus.toLowerCase()}.png`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
