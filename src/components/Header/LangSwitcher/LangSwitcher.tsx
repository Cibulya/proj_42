import React from 'react';
import {classNames} from 'helpers/classNames/classNames';
import {useTranslation} from 'react-i18next';
import Button from '@mui/material/Button';

interface LangSwitcherProps {
  className?: string;
}
const LangSwitcher = ({className}: LangSwitcherProps) => {
  const {t, i18n} = useTranslation();
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }
  return (
      <Button className={classNames('lang-switcher',{}, [className] )}
              onClick={toggle} variant="text">{t('Lang')}</Button>
  );
};

export default LangSwitcher;