import React, { FC } from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { usePage } from 'theme/usePage';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
  isBurger?: boolean;
  callback?: (value: boolean) => void;
}
const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, theme = AppLinkTheme.PRIMARY, children, callback, isBurger } = props;
  const { page, togglePage } = usePage();
  const linkHandler = () => {
    if (isBurger) {
      callback(false);
    }
  };
  return (
    <Link
      onClick={() => {
        linkHandler();
        togglePage(to.toString() === '/' ? 'main' : to.toString().slice(1));
      }}
      to={to}
      className={classNames('link', {}, [className, theme])}
    >
      {children}
    </Link>
  );
};

export default AppLink;
