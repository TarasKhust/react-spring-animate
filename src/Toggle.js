import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';

const Toggle = () => {
	const [items, setItems] = useState([
		{
			letter: 'S',
			key: 1,
		}, {
			letter: 'C',
			key: 2,
		}, {
			letter: 'O',
			key: 3,
		}, {
			letter: 'T',
			key: 4,
		}, {
			letter: 'I',
			key: 5,
		},
	]);
	const transition = useTransition(items, item => item.key, {
		from: { opacity: 0 },
		enter: { opacity: 1 },
		leave: { opacity: 0 },
	});

	return (
			<>
				{transition.map(({ item, key, props }) =>
						(
								<Animatedtitle style={props} key={key}>
									{item.letter}
								</Animatedtitle>
						))
				}
				<button className='button is-danger is-rounded is-large'
				        onClick={() => setItems([
					        {
						        letter: 'S',
						        key: 1,
					        }
			          ])}>Toogle
				</button>
			</>
	);
};

const Animatedtitle = animated('h1');

export default Toggle;