import { AboutPage } from 'pages/AboutPage';
import { ActivatePage } from 'pages/ActivatePage';
import { AuthPage } from 'pages/AuthPage';
import { LearningModePage } from 'pages/LearningModePage';
import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { PauseModePage } from 'pages/PauseModePage';
import { SecretPage } from 'pages/SecretPage';
import { StatisticPage } from 'pages/StatisticPage';
import { RouteProps } from 'react-router-dom';

export enum AppRoutes {
  MAIN = 'main',
  PAUSE = 'pause',
  LEARNING = 'learning',
  AUTH = 'auth',
  ABOUT = 'about',
  SECRET = 'secret',
  STATISTIC = 'statistic',
  ACTIVATE = 'activate',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ACTIVATE]: '/activate',
  [AppRoutes.PAUSE]: '/pause',
  [AppRoutes.LEARNING]: '/learning',
  [AppRoutes.AUTH]: '/auth',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.SECRET]: '/secret',
  [AppRoutes.STATISTIC]: '/statistic',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.ACTIVATE]: {
    path: RoutePath.activate,
    element: <ActivatePage />,
  },
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.PAUSE]: {
    path: RoutePath.pause,
    element: <PauseModePage />,
  },
  [AppRoutes.LEARNING]: {
    path: RoutePath.learning,
    element: <LearningModePage />,
  },
  [AppRoutes.AUTH]: {
    path: RoutePath.auth,
    element: <AuthPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.SECRET]: {
    path: RoutePath.secret,
    element: <SecretPage />,
  },
  [AppRoutes.STATISTIC]: {
    path: RoutePath.statistic,
    element: <StatisticPage />,
  },
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
