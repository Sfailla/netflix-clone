import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from './constants/routes';

import firebase, { FirebaseContext } from './firebase';

import Home from './pages/Home';

function App() {
	return (
		<Router>
			<FirebaseContext.Provider value={{ firebase }}>
				<Switch>
					<Route exact path={ROUTES.HOME}>
						<Home />
					</Route>
				</Switch>
			</FirebaseContext.Provider>
		</Router>
	);
}

export default App;
