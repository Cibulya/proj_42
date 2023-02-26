import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import { PauseModePage } from 'pages/PauseModePage';
import { LearningModePage } from 'pages/LearningModePage';
import { CommentsPage } from 'pages/CommentsPage';
import { AboutPage } from 'pages/AboutPage';
import { SecretPage } from 'pages/SecretPage';
import { StatisticPage } from 'pages/StatisticPage';
import { NotFoundPage } from 'pages/NotFoundPage';

export enum AppRoutes {
  MAIN = 'main',
  PAUSE = 'pause',
  LEARNING = 'learning',
  COMMENTS = 'comments',
  ABOUT = 'about',
  SECRET = 'secret',
  STATISTIC = 'statistic',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.PAUSE]: '/pause',
  [AppRoutes.LEARNING]: '/learning',
  [AppRoutes.COMMENTS]: '/comments',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.SECRET]: '/secret',
  [AppRoutes.STATISTIC]: '/statistic',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
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
  [AppRoutes.COMMENTS]: {
    path: RoutePath.comments,
    element: <CommentsPage />,
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
