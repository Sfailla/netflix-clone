import React from 'react';
import Jumbotron from './containers/jumbotron';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './containers/footer';
import Accordion from './containers/faq';

function App() {
	return (
		<Router>
			<Jumbotron />
			<Accordion />
			<Footer />
		</Router>
	);
}

export default App;
