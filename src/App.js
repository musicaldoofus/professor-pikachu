import React from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import Splash from './components/pages/Splash';
import GetStarted from './components/pages/GetStarted';
import Play from './components/pages/Play';
import './App.css';

const withHashRouter = (C) => {
	return (
		<HashRouter>
			{C}
		</HashRouter>
	);
}

const withBrowserRouter = (C) => {
	return (
		<Router>
			{C}
		</Router>
	);
}

const App = () => {
	const routes = (
		<Switch>
			<Route
				exact
				path="/"
				component={Splash}
			/>
			<Route
				path="/get-started"
				component={GetStarted}
			/>
			<Route
				path="/play"
				component={Play}
			/>
		</Switch>
	);
	return window.location.href.indexOf('github.io') > -1 ? withHashRouter(routes) : withBrowserRouter(routes);
}

export default App;