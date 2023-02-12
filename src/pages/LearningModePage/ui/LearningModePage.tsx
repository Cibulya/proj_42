import React, { useState } from 'react';
import LearningCard, { ModalStateType } from 'components/cards/LearningCard';
import { classNames } from 'helpers/classNames/classNames';
import { LearningSteps } from 'fonts/LearningSteps';
import { useTranslation } from 'react-i18next';

export interface LearningPropsType {
	modalCenter?: ModalStateType;
	modalLeft?: ModalStateType;
	modalRightTop?: ModalStateType;
	modalRightBottom?: ModalStateType;

}

const LearningModePage = () => {
	const { t } = useTranslation();
	const [progress, setProgress] = useState(0);
	const state = LearningSteps[progress];
	const modals = Object.entries(state);
	return (
		<div className={classNames('learning-mode')}>
			{LearningSteps.length > progress
				? modals.map((modal) => {
					if (modal[1].text !== '') {
						return (
							<LearningCard key={`${modal[0]}-index`}
										  className={classNames(`${modal[0]}`,
											  {},
											  [`${modal[1].picture !== '' ? 'withImg' : ''}`])}
										  callback={setProgress}
										  progress={progress}
										  state={modal[1]}></LearningCard>
						);
					}
				}
			)
			: <></>
			}
			{LearningSteps.length !== progress
			?
			<button className='next' onClick={(event) => setProgress(LearningSteps.length - 1 === progress
				? progress
				: progress + 1)}>
				{t('next')}
			</button>
			: <></>
			}
		</div>
	);
}
	;

	export default LearningModePage;