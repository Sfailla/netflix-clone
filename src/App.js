import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';
import firebase, { FirebaseContext } from './firebase';

import Home from './pages/Home';
import SignIn from './pages/Sign_In';
import Browse from './pages/Browse';

import PrivateRoute from './utils/routes/privateRoute';
import useAuth from './hooks/useAuth';

function App() {
	const { isLoading, authUser } = useAuth();
	const [ register, setRegister ] = React.useState(null);

	return (
		<Router>
			<FirebaseContext.Provider
				value={{ register, setRegister, authUser, firebase }}
			>
				<Switch>
					<Route
						exact
						path={ROUTES.HOME}
						render={() =>
							isLoading || authUser ? <Redirect to={ROUTES.BROWSE} /> : <Home />}
					/>
					<Route exact path={ROUTES.SIGN_IN} component={SignIn} />
					<PrivateRoute
						exact
						isLoading={isLoading}
						user={authUser}
						path={ROUTES.BROWSE}
						component={Browse}
					/>
				</Switch>
			</FirebaseContext.Provider>
		</Router>
	);
}

export default App;
