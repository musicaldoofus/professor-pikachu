import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Root.css';

const scenes = [];

class Root extends Component {
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
			<div className="get-started-root">
				<div className="get-started-root-player">
					{currentScene}
				</div>
				<div className="get-started-root-controls">
					<button className="btn" onClick={this.handleSceneAdvance}>Next &rarr;</button>
					<Link className="btn" to={this.props.match.url.concat('/how-to').replace(/\/{2}/g, '/')}>Skip to see how to play &rarr;</Link>
				</div>
			</div>
		);
	}
}

export default Root;