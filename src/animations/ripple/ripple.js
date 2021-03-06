import React from 'react';
import { RippleContainer } from './rippleStyles';
import useDebouncedRippleCleanUp from './hooks/useDebouncedRippleCleanup';

const RippleAnimation = ({ duration = 850, color = '#6F6F6F' }) => {
	const [ rippleArray, setRippleArray ] = React.useState([]);

	useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
		setRippleArray([]);
	});

	const addRipple = event => {
		const rippleContainer = event.currentTarget.getBoundingClientRect();
		const size =
			rippleContainer.width > rippleContainer.height
				? rippleContainer.width
				: rippleContainer.height;
		const x = event.pageX - rippleContainer.x - size / 2;
		const y = event.pageY - rippleContainer.y - size / 2;
		const newRipple = {
			x,
			y,
			size
		};

		setRippleArray([ ...rippleArray, newRipple ]);
	};

	return (
		<RippleContainer duration={duration} color={color} onMouseDown={addRipple}>
			{rippleArray.length > 0 &&
				rippleArray.map((ripple, index) => {
					return (
						<span
							key={'span' + index}
							style={{
								top: ripple.y,
								left: ripple.x,
								width: ripple.size,
								height: ripple.size
							}}
						/>
					);
				})}
		</RippleContainer>
	);
};

export default RippleAnimation;
