import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Toggle = () => {
	const [isToggled, setToggled] = useState(false);
	const transition = useTransition(isToggled, null, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	return (
			<>
				{transition.map(({ item, key, props }) =>
						item ? (
								<Animatedtitle style={props}>Hello</Animatedtitle>
						) : (
								<Animatedtitle style={props}>Hello</Animatedtitle>
						))}
				<button className='button is-danger is-rounded is-large'
				        onClick={() => setToggled(!isToggled)}>Toogle
				</button>
			</>
	);
};

const Animatedtitle = animated('h1');

export default Toggle;