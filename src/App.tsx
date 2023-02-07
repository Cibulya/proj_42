import { Link } from 'react-router-dom';
import React from 'react';
import { useTheme } from 'theme/useTheme';
import {classNames} from 'helpers/classNames/classNames';
import AppRouter from 'providers/router/AppRouter';

import './styles/index.scss';
const App = () => {
	const { theme, toggleTheme } = useTheme();

	return (
		<div className={classNames('app', {}, [theme])}>
			<button onClick={toggleTheme}> dark/light</button>
			<Link to={'/'}>About</Link>
			<Link to={'/pause'}>Pause Mode</Link>
			<Link to={'/learning'}>Learning Mode</Link>
			<Link to={'/auth'}>Auth</Link>
			<Link to={'/statistic'}>Statistic</Link>
			<AppRouter/>
		</div>
	);
};

export default App;
