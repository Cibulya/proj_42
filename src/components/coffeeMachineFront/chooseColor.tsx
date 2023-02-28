import React, { useState } from 'react';
import 'styles/chooseColor.scss';
import 'styles/LearningPage.scss';
import startPreparation from './startPreparation';
import { MsgNoResourcesPropsType } from 'components/coffeeMachineFront/addIndicators';
import { useTranslation } from 'react-i18next';

function ChooseColor({ msgNoResources, enjoy, choose }: MsgNoResourcesPropsType) {
  const [color, setColor] = useState('#89726a');
  const { t } = useTranslation();

  return (
    <div className="choose__message">
      <p>{t(`pause-choice`)}</p>
      <input type="color" className="choose__color" value={color} onChange={(e) => setColor(e.target.value)}></input>
      <button
        className="color__btn"
        onClick={() => startPreparation(msgNoResources, enjoy, choose)}
        value="Custom coffee"
        data-size="M"
        name={color}
      >
        {t(`OK`)}
      </button>
    </div>
  );
}
export default ChooseColor;
