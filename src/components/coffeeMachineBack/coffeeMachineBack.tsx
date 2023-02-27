import React from 'react';
import 'styles/coffeeMachineBack.scss';

const CoffeeMachineBack = function () {
  return (
    <div className="container__back">
      <div className="description">
        This application is designed for educational purposes only, and may not be used as a commercial application.{' '}
        <br />
        <br />
        The code is written in TypeScript and React with use of libraries Material UI, i18next, Howler.js.
        <br />
        REST API Back-end is created from zero on Nest.js and has a history of commits. It’s deployed and response to
        GET, POST, PATCH requests (used for Drinks, User Authorization, Learning progress and in generating Learning
        levels).
        <br />
        <br />
        Webpack, SaSS, Node.js, Git, ESLint, Prettier, Babel, canvas, Jest were used for development. Project is built
        on MVC architecture with a functional component approach.
      </div>
      <div className="machine__back">
        <div>DEVELOPERS</div>
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
