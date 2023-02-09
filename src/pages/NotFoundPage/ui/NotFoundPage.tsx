import React from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'helpers/classNames/classNames';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({className}: NotFoundPageProps) => {
  const {t} = useTranslation();
  return (
    <h2 className={classNames('error-page', {}, [className])}>
      {t('Not found')}
    </h2>
  );
};

export default NotFoundPage;