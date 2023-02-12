import React from 'react';
import { classNames } from 'helpers/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { LearningSteps } from 'fonts/LearningSteps';

export type ModalStateType = {
	text: string;
	picture: string;
	buttonOne: string;
	buttonTwo: string;
}
interface CardProps {
	progress?: number
	state?: ModalStateType
	className?: string;
	callback?: (index:number) => void;
}

const LearningCard = (props: CardProps) => {

	const { t } = useTranslation();
	const raiseProgress = (ind: number) => {
		if (ind === LearningSteps.length) {
			props.callback(ind - 1)
			window.open("https://www.youtube.com/watch?v=OBGxt8zhbRk")
		} else props.callback(ind)
	}
	return (
		<div className={classNames('card', {}, [`${props.className}`])}>

			{props.state.text !== ''
				? <p>{t(`${props.state.text}`)}</p>
				: <></>
			}
			{props.state.picture !== ''
				? <img src={props.state.picture} width='320px' height='240px' alt='MVC model'/>
				: <></>
			}
			{props.state.buttonOne !== ''
				? <button onClick={(event) => {
					raiseProgress(props.progress + 1)
				}}>{t(`${props.state.buttonOne}`)}</button>
				: <></>
			}
			{props.state.buttonTwo !== ''
				? <button onClick={(event) => {
					raiseProgress(props.progress + 1)
				}}>{t(`${props.state.buttonTwo}`)}</button>
				: <></>
			}
		</div>
	);
};

export default LearningCard;