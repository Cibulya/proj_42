import { Story } from '@storybook/react';
import { Theme } from 'theme/ThemeContext';
import { AppRoutes } from 'providers/routeConfig/routeConfig';

export const ThemeDecorator = (theme: Theme, page: AppRoutes) => (StoryComponent: Story) => {
  return (
    <div className={`app ${theme} ${page}`}>
      <StoryComponent />
    </div>
  );
};
