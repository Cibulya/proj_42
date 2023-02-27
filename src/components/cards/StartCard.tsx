import React from 'react';
import {classNames} from 'helpers/classNames/classNames';
import {useTranslation} from 'react-i18next';
import AppLink, { AppLinkTheme } from 'components/Header/Navbar/AppLink/AppLink';

interface CardProps {
	className?: string;
	to?: string;
	linkTitle?: string
}
const StartCard = (props: CardProps) => {
	const {t} = useTranslation();
	return (
		<div className={classNames('card',{}, [`${props.className}`] )}>
			<h2>{t(`${props.linkTitle}`)}</h2>
			<AppLink theme={AppLinkTheme.SECONDARY} to={props.to}>{t(`next`)}</AppLink>
		</div>
	);
};

export default StartCard;
