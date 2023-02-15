import React from 'react';
import {useTheme} from 'theme/useTheme';
import {classNames} from 'helpers/classNames/classNames';
import {useTranslation} from 'react-i18next';
import Button from '@mui/material/Button';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
  const {t} = useTranslation();
  const {theme, toggleTheme} = useTheme();
  return (
      <Button className={classNames('theme-switcher', {}, [className])}
              onClick={toggleTheme} variant="text">{t('Theme')}</Button>
  );
};

export default ThemeSwitcher;