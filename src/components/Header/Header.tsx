import React, { useLayoutEffect, useState } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import Navbar from './Navbar/Navbar';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import LangSwitcher from 'components/Header/LangSwitcher/LangSwitcher';
import AppLink, { AppLinkTheme } from 'components/Header/Navbar/AppLink/AppLink';
import Hamburger from 'hamburger-react';

interface HeaderProps {
  className?: string;
}

const Header = ({ className }: HeaderProps) => {
  const [isBurger, setBurger] = useState(null);
  const [isOpen, setOpen] = useState(null);
  const resizeWindow = () => {
    window.innerWidth <= 768 ? setBurger(true) : setBurger(false);
  };

  useLayoutEffect(() => {
    resizeWindow();
    window.addEventListener('resize', resizeWindow);
    return () => {
      window.removeEventListener('resize', resizeWindow);
    };
  }, []);

  return (
    <header className={classNames('header', {}, [className])}>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={'header-logo'}></AppLink>
      <Navbar callback={setOpen} burgerIsOpen={isOpen} isBurger={isBurger} />
      <ThemeSwitcher />
      <LangSwitcher />
      {isBurger && <Hamburger color="#ffffff" size={28} toggled={isOpen} toggle={setOpen} rounded />}
    </header>
  );
};

export default Header;
