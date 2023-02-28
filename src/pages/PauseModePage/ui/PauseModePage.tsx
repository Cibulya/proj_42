import React from 'react';
import CoffeeMachineFront from 'components/coffeeMachineFront/coffeeMachineFront';
import 'styles/coffeeMachineFront.scss';
import ChooseColor from 'components/coffeeMachineFront/chooseColor';
import { useTranslation } from 'react-i18next';

const PauseModePage = () => {
  const { t } = useTranslation();
  const msgNoResources = [t('pause-water'), t('pause-beans'), t('pause-empty')];
  const enjoy = t('pause-finish');
  const choose = t('pause-choose'); 
  return (
    <div className="pause-mode">
      <div className="container">
        <CoffeeMachineFront msgNoResources={msgNoResources} enjoy={enjoy} choose={choose} />
        <div className="invitation">
        {t(`pause-invitation`)}
        </div>
        <ChooseColor msgNoResources={msgNoResources} enjoy={enjoy} choose={choose} />
      </div>
    </div>
  );
};

export default PauseModePage;