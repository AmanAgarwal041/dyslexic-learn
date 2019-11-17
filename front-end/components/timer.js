import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TimeFormat from 'hh-mm-ss';

let timerHandle;
const Timer = props => {
	const { time, quizTimeUpHandler } = props;
	const [seconds, setSeconds] = useState(time);

	useEffect(() => {
		setSeconds(time);
	}, [time]);

	useEffect(() => {
		global.document.addEventListener('start-time', startTime);
		return () => {
			global.document.removeEventListener('start-time', startTime);
			// eslint-disable-next-line no-undef
			const Abort = new AbortController();
			Abort.abort();
		};
	}, []);

	const startTime = () => {
		if (time && time > 0) {
			timerHandle = setInterval(tick, 1000);
		}
	};

	global.getRemainingTime = () => seconds;

	const stopTimer = () => {
		clearInterval(timerHandle);
		quizTimeUpHandler();
	};

	const tick = () => {
		setSeconds(seconds => {
			const updatedSeconds = seconds - 1;

			if (updatedSeconds < 1) {
				stopTimer();
				return 0;
			}

			return updatedSeconds;
		});
	};

	return (
		<div className="absolute right-auto-l left-0 right-0 justify-center flex items-center br2 pv2 ph3">
			<span className={`white flex fw6 `}>
				{TimeFormat.fromS(seconds, 'mm:ss')}
			</span>
		</div>
	);
};

Timer.propTypes = {
	time: PropTypes.number.isRequired,
	quizTimeUpHandler: PropTypes.func.isRequired,
};

Timer.defaultProps = {};

export default Timer;