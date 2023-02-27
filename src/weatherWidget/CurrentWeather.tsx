import { PropsType } from 'weatherWidget/weatherTypes';

import './weather.scss';

const CurrentWeather = ({ weather }: PropsType) => {
  return (
    <div className="weather-wrapper">
      <div className="weather-main">
        <div>
          <h3>{weather === null ? '' : weather.city_name}</h3>
          <p>{weather === null ? '' : weather.weather.description}</p>
        </div>
      </div>
      <div className="weather-info">
        <div className="temperature">
          <img
            width={'60px'}
            alt="weather-icon"
            src={
              weather === null
                ? ''
                : `https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/weather/${weather.weather.icon}.png`
            }
          />
          <h2>{weather === null ? '' : weather.temp}°C</h2>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
