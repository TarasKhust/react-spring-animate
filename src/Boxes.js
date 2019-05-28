import React, { useState, useRef } from 'react';
import { animated, useTrail, config, useSpring, useChain, useTransition } from 'react-spring';

const items = [0.5, 0.3, 0.2, 0.7, 1, 3, 32, 55, 66, 88], Boxes = () => {
	const [on, toggle] = useState(false);

	const springRef = useRef();
	const { size } = useSpring({
		ref: springRef,
		from: { size: '20%' },
		to: { size: on ? '100%' : '20%' }
	})

	const transitionRef = useRef();

	const transition = useTransition(on ? items : [], item => item, {
		ref: transitionRef,
		trail: 400 / items.length,
		from: {
			opacity: 0,
			transform: 'scale(0)'
		},
		enter: {
			opacity: 1,
			transform: 'scale(1)'
		},
		leave: {
			opacity: 0,
			transform: 'scale(0)'
		},
		config: config.gentle
	});
	// With Trail
	// const trail = useTrail(items.length, {
	// 	ref: transitionRef,
	// 	from: {opacity: 0,
	// 		transform: 'scale(0)'},
	// 	to: {opacity: on ? 1 : 0,
	// 		transform: on ? 'scale(1)' : 'scale(0)'},
	// 	config: config.gentle
	// });

	const render = () => {
		return transition.map(({ key, props }) => (
				<animated.div className="box-two" key={key} style={props}/>
		));
	};

	// Width trail
	// const render = () => {
	// 	return trail.map(animation => (
	// 			<animated.div className="box-two" style={animation}/>
	// 	));
	// };

	useChain(on ? [springRef, transitionRef] : [transitionRef, springRef]);

	return (
			<div className='full-height'>
				<animated.div style={{ width: size, height: size }}
				              className="boxes-grid-two" onClick={() => toggle(!on)}>
					{/*<button onClick={() => toggle(!on)}>Click</button>*/}
					{render()}
				</animated.div>
			</div>
	);
};

export default Boxes;
