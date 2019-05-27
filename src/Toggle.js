import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Toggle = () => {
	const [isToggled, setToggled] = useState(false);
	const { y, color } = useSpring({
		// opacity: isToggled ? 0 : 1,
		// fontSize: isToggled ? '2rem' : '20em',
		color: isToggled ? 'tomato' : 'white',
		y: isToggled ? 0 : 1,
		transform: isToggled ? 'translate3d(0,0,0)' : 'translate3d(0,-50px,0)'
	})

	return (
			<>
				<Animatedtitle
						style={{
							transform: y.interpolate({
								range: [0, 0.25, 0.5, 0.75, 1],
								output: [0, -25, -50, -100, -50]
							}).interpolate( y => `translate3d(0, ${y}px, 0)`),
							color
				}}>Hello</Animatedtitle>
				<button className='button is-danger is-rounded is-large'
				        onClick={() => setToggled(!isToggled)}>Toogle
				</button>
			</>
	);
};

const Animatedtitle = animated('h1');

export default Toggle;