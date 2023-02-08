import React from 'react';
import {classNames} from 'helpers/classNames/classNames';
import AppLink, {AppLinkTheme} from './AppLink/AppLink';
import {useTranslation} from 'react-i18next';

interface NavbarProps {
  className?: string;
}
const Navbar = ({className}: NavbarProps) => {
  const {t} = useTranslation();
  return (
    <div className={classNames('navbar',{}, [className] )}>
      <div className='navbar-links'>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t('About')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/pause'}>{t('Pause Mode')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/learning'}>{t('Learning Mode')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/auth'}>{t('Auth')}</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/statistic'}>{t('Statistic')}</AppLink>
      </div>
    </div>
  );
};

export default Navbar;