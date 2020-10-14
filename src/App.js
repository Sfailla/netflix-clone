import React from 'react';
import Jumbotron from './containers/jumbotron';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './containers/footer';

function App() {
	return (
		<Router>
			<Jumbotron />
			<Footer />
		</Router>
	);
}

export default App;
