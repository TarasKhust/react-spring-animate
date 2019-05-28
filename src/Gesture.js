import React from 'react';
import { useGesture } from 'react-with-gesture';
import { animated, useSpring} from 'react-spring';

const Gesture = () => {
	const [ { xy }, set ] = useSpring(() => ({ xy: [0, 0] }));

	const bind = useGesture(({ down, delta}) => {
		set({ xy: down ? delta : [0, 0] })
	});

	return (
			<animated.div style={{
				opacity: xy.interpolate({ map: Math.abs, range: [0, 400], output: [1, 0]}),
				transform: xy.interpolate((x, y) => `translate3d(${x}px, ${y}px, 0)`)
			}}{...bind()} className="box"/>
	);
};

export default Gesture;