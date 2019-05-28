import React, { useState} from 'react';
import { animated, useTrail, config } from 'react-spring';

const items = [0.5, 0.3, 0.2, 0.7, 1];

const Boxes = () => {
	const [on, toggle] = useState(false);

	const trail = useTrail(items.length, {
		opacity: on ? 0 : 1,
		transform: on ? 'scale(0.3)' : 'scale(1)',
		backgroundColor: on ? 'blue' : 'tomato',
		config: config.gentle
	});

	const render = () => {
		return trail.map(animation => (
				<animated.div className="box" style={animation}/>
		));
	};

	return (
			<div className="boxes-grid">
				<button onClick={() => toggle(!on)}>Click</button>
				{render()}
			</div>
	);
};

export default Boxes;
