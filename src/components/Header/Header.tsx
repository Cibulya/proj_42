import React from 'react';
import { classNames } from 'helpers/classNames/classNames';
import Navbar from './Navbar/Navbar';
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher';
import LangSwitcher from 'components/Header/LangSwitcher/LangSwitcher';
import AppLink, { AppLinkTheme } from 'components/Header/Navbar/AppLink/AppLink';

interface HeaderProps {
	className?: string;
}

const Header = ({ className }: HeaderProps) => {
	return (
		<header className={classNames('header', {}, [className])}>
			<AppLink theme={AppLinkTheme.SECONDARY} to={'/'} className={'header-logo'}></AppLink>
			<Navbar />
			<ThemeSwitcher />
			<LangSwitcher />
		</header>
	);
};

export default Header;