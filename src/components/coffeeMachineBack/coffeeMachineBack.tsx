import React from 'react';
import 'styles/coffeeMachineBack.scss';
import { useTranslation } from 'react-i18next';

const CoffeeMachineBack = function () {
  const { t } = useTranslation();
  return (
    <div className="container__back">
      <div className="description">
        {t(`about-1`)}
        <br />
        <br />
        {t(`about-2`)}
        <br />
        <br />
        {t(`about-3`)}
      </div>
      <div className="machine__back">
        <div>{t(`Developers`)}</div>
        <div className="devs">
          <a href="https://github.com/Cibulya">
            <div className="dev">C:dev</div>
          </a>
          <a href="https://github.com/DrobyshSV">
            <div className="dev">DrobyshSV</div>
          </a>
          <a href="https://github.com/MarinaKovel">
            <div className="dev">
              Marina
              <br />
              Kovel
            </div>
          </a>
          <a href="https://www.linkedin.com/in/anna-antinyan-ab45aa3a/">
            <div className="design">Design by Antinyan Draw</div>
          </a>
        </div>
      </div>
    </div>
  );
};
export default CoffeeMachineBack;
