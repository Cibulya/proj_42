import { BgParticles } from 'components/secretBg/secretBg';
import '../../../styles/activatePage.scss';
import { useTranslation } from 'react-i18next';

const ActivatePage = () => {
  const { t } = useTranslation();
  return (
    <div className="activate__page">
      <BgParticles />
      <h1 className="activate__title">{t('activate-title')}</h1>
      <p className="activate__text">{t('activate-text')}</p>
      <p className="activate__description">{t('activate-description')}</p>
    </div>
  );
};

export default ActivatePage;
