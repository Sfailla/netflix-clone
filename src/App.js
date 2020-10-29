import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import firebase, { FirebaseContext } from './firebase';
import { Loader } from './components';

import Home from './pages/Home';
import SignIn from './pages/Sign_In';
import Browse from './pages/Browse';
import SelectProfile from './pages/SelectProfile';

import { PrivateRoute } from './utils/routes';
import useAuth from './hooks/useAuth';

function App() {
	const { isAuthPending, authUser } = useAuth();
	const [ register, setRegister ] = React.useState(null);

	return (
		<Router>
			{isAuthPending ? (
				<Loader />
			) : (
				<FirebaseContext.Provider
					value={{ register, setRegister, authUser, isAuthPending, firebase }}
				>
					<Switch>
						<Route
							exact
							path={ROUTES.HOME}
							render={() =>
								authUser ? <Redirect to={ROUTES.PROFILE_SELECTION} /> : <Home />}
						/>
						<Route path={ROUTES.SIGN_IN} component={SignIn} />
						<PrivateRoute
							isLoading={isAuthPending}
							user={authUser}
							path={ROUTES.PROFILE_SELECTION}
							component={SelectProfile}
						/>
						<PrivateRoute
							isLoading={isAuthPending}
							user={authUser}
							path={ROUTES.BROWSE}
							component={Browse}
						/>
					</Switch>
				</FirebaseContext.Provider>
			)}
		</Router>
	);
}

export default App;
