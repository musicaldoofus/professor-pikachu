import React from 'react';
import { BrowserRouter as Router, HashRouter, Switch, Route } from 'react-router-dom';
import Splash from './components/pages/Splash';
import './App.css';

const App = () => {
	const routes = (
		<Switch>
			<Route
				exact
				path="/"
				component={Splash}
			/>
		</Switch>
	);
	return routes;
}

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

const withRouter = (C) => {
	return window.location.indexOf('github.io') > -1 ? withHashRouter(C) : withBrowserRouter(C);
}

const appWithRouter = withRouter(App);

export default appWithRouter;