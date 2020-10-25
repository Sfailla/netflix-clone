import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

export default function PrivateRoute({
	user,
	isLoading,
	component: Component,
	...restProps
}) {
	return (
		<Route
			{...restProps}
			render={props =>
				isLoading || user ? (
					<Component {...props} {...restProps} />
				) : (
					<Redirect to={ROUTES.HOME} />
				)}
		/>
	);
}
