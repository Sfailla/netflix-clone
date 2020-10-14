import React from 'react';
import Jumbotron from './containers/jumbotron';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './containers/footer';

function App() {
	return (
		<Router>
			<Switch>
				<Jumbotron />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
