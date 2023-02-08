import React from 'react';
import {useTheme} from 'theme/useTheme';
import {classNames} from 'helpers/classNames/classNames';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {theme, toggleTheme} = useTheme();
  return (
    <button
      className={classNames('theme-switcher', {}, [className])}
      onClick={toggleTheme}
    >
      dark/light
    </button>
  );
};

export default ThemeSwitcher;