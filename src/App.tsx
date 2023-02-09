import React, {Suspense} from 'react';
import { useTheme } from 'theme/useTheme';
import {classNames} from 'helpers/classNames/classNames';
import AppRouter from 'providers/router/AppRouter';
import Header from 'components/Header/Header';

import './styles/index.scss';

const App = () => {
	const { theme } = useTheme();
	return (
		<div className={classNames('app', {}, [theme])}>
			<Suspense fallback=''>
				<Header/>
				<AppRouter/>
			</Suspense>
		</div>
	);
};

export default App;
