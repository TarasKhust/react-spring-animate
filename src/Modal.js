import React, { useState } from 'react';
import { animated, useTransition } from 'react-spring'

const Modal = ({ closeModal, animation, pointerEvents }) => {
	return (
			<div className='modal' style={{pointerEvents}}>
				<animated.div className='modal-card' style={animation}>
					<h1>Modal</h1>
					<button onClick={closeModal}>Close</button>
				</animated.div>
			</div>
	);
};

const ModalWrapper = () => {
	const [on, setToggle] = useState(false);
	const transition = useTransition(on, null, {
		from: { opacity: '0', transform: 'translate3d(0, -40, 0)'},
		enter: { opacity: '1', transform: 'translate3d(0, 0, 0)'},
		leave: { opacity: '0', transform: 'translate3d(0, -40, 0)'}
	})
	const pointerEvents = on ? 'all' : 'none'
	return (
			<div>
				{transition.map(({ item, key, props: animation }) =>
					item && <Modal animation={animation} pointerEvents={pointerEvents} closeModal={() => setToggle(false)} key={key}/>
					)}
				<button onClick={() => setToggle(!on)}>Open</button>
			</div>
	);
};

export default ModalWrapper;