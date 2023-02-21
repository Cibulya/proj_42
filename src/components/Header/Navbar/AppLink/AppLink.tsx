import React, {FC} from 'react';
import {classNames} from 'helpers/classNames/classNames';
import {Link, LinkProps} from 'react-router-dom';
import { useTheme } from 'theme/useTheme';
import { usePage } from 'theme/usePage';

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
interface AppLinkProps extends LinkProps{
  className?: string;
  theme?: AppLinkTheme;
}
const AppLink: FC<AppLinkProps> = (props) => {
  const {to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children} = props;
  const { page, togglePage } = usePage();
  return (
        <Link 
          onClick={() => {
            togglePage(to.toString() === '/' ? 'main' : to.toString().slice(1));
          }}
          to={to} 
          className={classNames('link',{}, [className, theme])}
        >
          {children}
        </Link>
  );
};

export default AppLink;