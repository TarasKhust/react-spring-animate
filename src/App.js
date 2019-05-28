import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
// import Routes from './Routes.js';
import Nav from './Nav';
import Checkout from './Checkout';
import Modal from './Modal';
import Accordion from './Accordion';
import Waypoints from './Waypoints';
import './App.css';
import Gesture from './Gesture';
import Boxes from './Boxes';

const App = () => {
	const [isNavOpen, setNavOpen] = useState(false);
	const navAnimation = useSpring(
			{ transform: isNavOpen
						? `translate3d(0,0,0) scale(1)`
						: `translate3d(100%,0,0) scale(0)`
			});
	const fade = useSpring({
				from: { opacity: 0 }, opacity: 1,
			},
);
	return (
			<animated.div className="App" style={fade}>
				<header className="App-header">
					<img src={logo} className="logo"/>
					<button
							onClick={() => setNavOpen(!isNavOpen)}
							className="menu-button">Menu</button>
					{/*<Nav style={navAnimation}/>*/}
				</header>
				<main>
					{/*<Routes/>*/}
					<Modal/>
					<Accordion/>
					{/*<Waypoints/>*/}
					{/*<Gesture/>*/}
					<Boxes/>
					<Checkout isOpen={isNavOpen}/>
				</main>
			</animated.div>
	);
};

export default App;
