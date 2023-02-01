import {Link, Route, Routes} from 'react-router-dom';
import React, {Suspense} from 'react';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {PauseModePageAsync} from './pages/PauseModePage/PauseModePage.async';
import {LearningModePageAsync} from './pages/LearningModePage/LearningModePage.async';
import {AuthPageAsync} from './pages/AuthPage/AuthPage.async';
import {StatisticPageAsync} from './pages/StatisticPage/StatisticPage.async';
import {useTheme} from './theme/useTheme';

import './styles/index.scss'
const App = () => {
  const {theme, toggleTheme} = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>dark/light</button>
      <Link to={'/'}>About</Link>
      <Link to={'/pause'}>Pause Mode</Link>
      <Link to={'/learning'}>Learning Mode</Link>
      <Link to={'/auth'}>Auth</Link>
      <Link to={'/statistic'}>Statistic</Link>
      <Suspense fallback={<div>LOADING....</div>}>
        <Routes>
          <Route path={'/'} element={<AboutPageAsync/>}/>
          <Route path={'/pause'} element={<PauseModePageAsync/>} />
          <Route path={'/learning'} element={<LearningModePageAsync/>}/>
          <Route path={'/auth'} element={<AuthPageAsync/>}/>
          <Route path={'/statistic'} element={<StatisticPageAsync/>}/>
        </Routes>
      </Suspense>

    </div>
  );
};

export default App;