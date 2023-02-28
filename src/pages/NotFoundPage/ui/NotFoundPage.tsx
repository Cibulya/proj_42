import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'helpers/classNames/classNames';
import 'styles/PageErrorBoundary.scss';
import { BgParticles } from 'components/secretBg/secretBg'

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation();
  return (
    <div className="container__error">
      <p className="error">404</p>
      <h2 className={classNames('error-page', {}, [className])}>{t('Not found')}</h2>
      <img
        src="https://raw.githubusercontent.com/MarinaKovel/coffeemachinedata/main/not-found-fox.png"
        alt="Page not found"
      />
      <BgParticles/>
    </div>
  );
};

export default NotFoundPage;
