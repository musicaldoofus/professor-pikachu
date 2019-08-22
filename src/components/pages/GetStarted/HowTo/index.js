import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HowTo.css';

const scenes = [];

class HowTo extends Component {
	constructor() {
		super();
		this.state = {
			sceneIndex: 0
		};
		this.handleSceneAdvance = this.handleSceneAdvance.bind(this);
	}
	
	handleSceneAdvance() {
		this.setState({sceneIndex: this.state.sceneIndex + 1});
	}
	
	render() {
		const currentScene = scenes[this.state.sceneIndex];
		return (
			<div className="get-started-how-to">
				<div className="get-started-how-to-player">
					{currentScene}
				</div>
				<div className="get-started-how-to-controls">
					<button className="btn" onClick={this.handleSceneAdvance}>Next &rarr;</button>
					<Link className="btn" to="/play">Start playing</Link>
				</div>
			</div>
		);
	}
}

export default HowTo;	