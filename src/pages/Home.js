import React from 'react';

import Jumbotron from '../containers/jumbotron';
import Footer from '../containers/footer';
import Accordion from '../containers/faq';
import Header from '../containers/header';

export default function Home() {
	return (
		<React.Fragment>
			<Header />
			<Jumbotron />
			<Accordion />
			<Footer />
		</React.Fragment>
	);
}
