import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import firebase, { FirebaseContext } from './firebase';
import { Loader } from './components';

import Home from './pages/Home';
import SignIn from './pages/Sign_In';
import Browse from './pages/Browse';
import SelectProfile from './pages/SelectProfile';

import { PrivateRoute, PublicRoute } from './utils/routes';
import useAuth from './hooks/useAuth';

function App() {
	const { isAuthPending, authUser } = useAuth();
	const [ register, setRegister ] = React.useState(null);
	const [ profile, setProfile ] = React.useState({});

	return (
		<Router>
			{isAuthPending ? (
				<Loader />
			) : (
				<FirebaseContext.Provider
					value={{
						register,
						setRegister,
						profile,
						setProfile,
						authUser,
						isAuthPending,
						firebase
					}}
				>
					<Switch>
						<PublicRoute
							exact
							path={ROUTES.HOME}
							component={Home}
							restricted={!!authUser}
							redirect={ROUTES.PROFILE_SELECTION}
						/>
						<PublicRoute path={ROUTES.SIGN_IN} component={SignIn} />
						<PrivateRoute
							user={authUser}
							path={ROUTES.PROFILE_SELECTION}
							component={SelectProfile}
							redirect={ROUTES.HOME}
						/>
						<PrivateRoute
							user={authUser}
							path={ROUTES.BROWSE}
							component={Browse}
							redirect={ROUTES.HOME}
						/>
					</Switch>
				</FirebaseContext.Provider>
			)}
		</Router>
	);
}

export default App;
