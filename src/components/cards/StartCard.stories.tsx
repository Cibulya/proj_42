import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import StartCard from 'components/cards/StartCard';
import { classNames } from 'helpers/classNames/classNames';
import { ThemeDecorator } from 'storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'theme/ThemeContext';
import { AppRoutes } from 'providers/routeConfig/routeConfig';

export default {
  title: 'StartCard',
  component: StartCard,
  argTypes: {},
} as ComponentMeta<typeof StartCard>;

const Template: ComponentStory<typeof StartCard> = (args) => (
  <div className={'main-page'}>
    <div className={classNames('cards')}>
      <StartCard {...args} />
    </div>
  </div>
);

export const PauseDark = Template.bind({});
PauseDark.args = {
  to: '/pause',
  linkTitle: 'Pause Mode',
};
PauseDark.decorators = [ThemeDecorator(Theme.DARK, AppRoutes.MAIN)];
export const PauseLight = Template.bind({});
PauseLight.args = {
  to: '/pause',
  linkTitle: 'Pause Mode',
};
PauseLight.decorators = [ThemeDecorator(Theme.LIGHT, AppRoutes.MAIN)];
export const LearnDark = Template.bind({});
LearnDark.args = {
  to: '/learning',
  linkTitle: 'Learning Mode',
};
LearnDark.decorators = [ThemeDecorator(Theme.DARK, AppRoutes.MAIN)];
export const LearnLight = Template.bind({});
LearnLight.args = {
  to: '/learning',
  linkTitle: 'Learning Mode',
};
LearnLight.decorators = [ThemeDecorator(Theme.LIGHT, AppRoutes.MAIN)];
