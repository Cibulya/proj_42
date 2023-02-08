import React from 'react';
import {classNames} from 'helpers/classNames/classNames';
import {useTranslation} from 'react-i18next';

interface LangSwitcherProps {
  className?: string;
}
const LangSwitcher = ({className}: LangSwitcherProps) => {
  const {t, i18n} = useTranslation();
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en')
  }
  return (
      <button className={classNames('lang-switcher',{}, [className] )}
              onClick={toggle}>
        {t('Lang')}
      </button>

  );
};

export default LangSwitcher;