import React from 'react';
import {classNames} from 'helpers/classNames/classNames';
import Navbar from './Navbar/Navbar';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';

interface HeaderProps {
  className?: string;
}

const Header = ({className}: HeaderProps) => {
  return (
    <header className={classNames('header', {}, [className])}>
      <ThemeSwitcher/>
      <Navbar/>
    </header>
  );
};

export default Header;