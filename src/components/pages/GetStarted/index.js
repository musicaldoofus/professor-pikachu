import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Root from './Root';
import HowTo from './HowTo';
import './GetStarted.css';

const GetStarted = ({match}) => {
	return (
		<Fragment>
			<Route
				exact
				path={match.url}
				component={Root}
			/>
			<Route
				path={`${match.url}/how-to`}
				component={HowTo}
			/>
		</Fragment>
	);
}

export default GetStarted;