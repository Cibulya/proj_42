import React from 'react';
import { classNames } from 'helpers/classNames/classNames';
import AppLink, { AppLinkTheme } from './AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  className?: string;
  burgerIsOpen: boolean;
  isBurger: boolean;
  callback: (value: boolean) => void;
}

const Navbar = ({ className, burgerIsOpen, isBurger, callback }: NavbarProps) => {
  const { t } = useTranslation();

  const closeBurger = () => {
    callback(false);
  };

  return (
    <div
      className={classNames('navbar', { tablet: isBurger, active: burgerIsOpen }, [className])}
      onClick={closeBurger}
    >
      <div className="navbar-links">
        <AppLink callback={callback} isBurger={isBurger} theme={AppLinkTheme.SECONDARY} to={'/'}>
          {t('Main')}
        </AppLink>
        <AppLink callback={callback} isBurger={isBurger} theme={AppLinkTheme.SECONDARY} to={'/about'}>
          {t('About')}
        </AppLink>
        <AppLink callback={callback} isBurger={isBurger} theme={AppLinkTheme.SECONDARY} to={'/comments'}>
          {t('Comments')}
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
