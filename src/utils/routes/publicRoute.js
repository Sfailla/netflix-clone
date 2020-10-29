import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function PublicRoute({
	component: Component,
	restricted,
	redirect: pathname,
	...rest
}) {
	return (
		<Route
			{...rest}
			render={props =>
				!restricted ? <Component {...props} /> : <Redirect to={{ pathname }} />}
		/>
	);
}
