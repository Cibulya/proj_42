import { addDecorator } from '@storybook/react';
import { StyleDecorator } from '../../src/storybook/StyleDecorator/StyleDecorator';
import { RouteDecorator } from '../../src/storybook/RouteDecorator/RouteDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
addDecorator(StyleDecorator);
addDecorator(RouteDecorator);
