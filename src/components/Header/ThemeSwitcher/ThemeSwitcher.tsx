import React from 'react';
import {useTheme} from 'theme/useTheme';
import {classNames} from 'helpers/classNames/classNames';
import {useTranslation} from 'react-i18next';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {t} = useTranslation();
  const {theme, toggleTheme} = useTheme();
  return (
    <button
      className={classNames('theme-switcher', {}, [className])}
      onClick={toggleTheme}
    >
      {t('Theme')}
    </button>
  );
};

export default ThemeSwitcher;