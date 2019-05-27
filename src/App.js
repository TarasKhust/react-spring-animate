import React from 'react';
import { useSpring, animated } from 'react-spring';
import logo from './logo.svg';
import './App.css';

const App = () => {
	return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="logo"/>
					<button className="menu-button">Menu</button>
				</header>
			</div>
	);
};

export default App;
