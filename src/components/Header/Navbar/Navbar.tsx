import React from 'react';
import {classNames} from 'helpers/classNames/classNames';
import AppLink, {AppLinkTheme} from './AppLink/AppLink';

interface NavbarProps {
  className?: string;
}
const Navbar = ({className}: NavbarProps) => {
  return (
    <div className={classNames('navbar',{}, [className] )}>
      <div className='navbar-links'>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>About</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/pause'}>Pause Mode</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/learning'}>Learning Mode</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/auth'}>Auth</AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/statistic'}>Statistic</AppLink>
      </div>
    </div>
  );
};

export default Navbar;