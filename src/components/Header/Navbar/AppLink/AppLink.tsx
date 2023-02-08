import React, {FC} from 'react';
import {classNames} from 'helpers/classNames/classNames';
import {Link, LinkProps} from 'react-router-dom';

export enum AppLinkTheme {
  PRIMARY= 'primary',
  SECONDARY= 'secondary',
}
interface AppLinkProps extends LinkProps{
  className?: string;
  theme?: AppLinkTheme
}
const AppLink: FC<AppLinkProps> = (props) => {
  const {to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children} = props
  return (
        <Link to={to} className={classNames('link',{}, [className, theme])}>{children}</Link>
  );
};

export default AppLink;