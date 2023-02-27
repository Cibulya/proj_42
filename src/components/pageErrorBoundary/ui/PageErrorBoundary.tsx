import React from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button from '@mui/material/Button';

interface PageErrorBoundaryProps {
  className?: string;
}
const PageErrorBoundary = ({ className }: PageErrorBoundaryProps) => {
  const { t } = useTranslation();
  const reloadPage = () => {
    location.reload();
  };
  return (
    <div className={classNames('error-boundary', {}, [className])}>
      <h2>{t('boundaryError')}</h2>
      <Button onClick={reloadPage} variant="contained" color="secondary">
        {t('reload')}
      </Button>
    </div>
  );
};

export default PageErrorBoundary;
