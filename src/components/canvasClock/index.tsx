import React, { useEffect, useRef } from 'react';
import './canvasClock.scss';
import { renderDigitalClock } from 'components/canvasClock/digit';

const CanvasClock = (props: any) => {
	const defaultProps = {
		size: 200,
		bgColor: '#4d4d4d', // day mode color
		timeoffset: 0,
		dialColor: '#00ff05',
		time24h: true,
		...props,
	};
	const { id, width, height } = defaultProps;

	const canvasRef = useRef();

	useEffect(() => {
		const context = (canvasRef.current as HTMLCanvasElement).getContext(
			'2d'
		);
		renderDigitalClock(context, defaultProps);
	});

	return (
		<>
			<canvas ref={canvasRef} id={id} width={width} height={height} />
		</>
	);
};

export default CanvasClock;
