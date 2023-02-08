import {RouteProps} from 'react-router-dom';
import {AboutPage} from 'pages/AboutPage';
import {PauseModePage} from 'pages/PauseModePage';
import {LearningModePage} from 'pages/LearningModePage';
import {AuthPage} from 'pages/AuthPage';
import {StatisticPage} from 'pages/StatisticPage';

export enum AppRoutes {
  ABOUT = 'about',
  PAUSE = 'pause',
  LEARNING = 'learning',
  AUTH = 'auth',
  STATISTIC = 'statistic',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: '/',
  [AppRoutes.PAUSE]: '/about',
  [AppRoutes.LEARNING]: '/learning',
  [AppRoutes.AUTH]: '/auth',
  [AppRoutes.STATISTIC]: '/statistic',
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage/>
  },
  [AppRoutes.PAUSE]: {
    path: RoutePath.pause,
    element: <PauseModePage/>
  },
  [AppRoutes.LEARNING]: {
    path: RoutePath.learning,
    element: <LearningModePage/>
  },
  [AppRoutes.AUTH]: {
    path: RoutePath.auth,
    element: <AuthPage/>
  },
  [AppRoutes.STATISTIC]: {
    path: RoutePath.statistic,
    element: <StatisticPage/>
  },
}