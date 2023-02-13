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
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('About')}</AppLink>
      </div>
    </div>
  );
};

export default Navbar;