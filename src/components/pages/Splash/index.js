import React from 'react';
import { Link } from 'react-router-dom';
import './Splash.css';

const Splash = () => {
	return (
		<div className="splash">
			<div className="splash-hero">
				<div className="splash-hero-img">
				</div>
				<div className="splash-hero-text">
				</div>
			</div>
			<div className="splash-links">
				<Link to="/play">Keep playing</Link>
				<Link to="/get-started">Begin learning with Professor Pikachu</Link>
			</div>
		</div>
	);
}

export default Splash;