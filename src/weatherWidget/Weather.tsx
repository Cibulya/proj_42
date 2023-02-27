import React, { useEffect, useState } from 'react';
import CurrentWeather from 'weatherWidget/CurrentWeather';
import { useTranslation } from 'react-i18next';
import { IWeather } from 'weatherWidget/weatherTypes';

export const WEATHER_API_KEY = 'b5577dac54634a88a36e9bc8abe697fb';
export const BASE_URL = 'https://api.weatherbit.io/v2.0/';

const Weather = () => {
  const { i18n } = useTranslation();
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      fetch(`${BASE_URL}current?key=${WEATHER_API_KEY}&lang=${i18n.language}&lat=${latitude}&lon=${longitude}&units=M`)
        .then((response: Response): Promise<IWeather> => response.json())
        .then((response) => {
          setWeather(response.data[0]);
        })
        .catch((err) => console.error(err));
    });
  }, [i18n.language]);

  return <CurrentWeather weather={weather} />;
};

export default Weather;
