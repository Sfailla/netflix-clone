import React from 'react';
import { Hero } from '../components';
import { Jumbotron, Footer, Header, SignUp, Accordion } from '../containers';

export default function Home() {
	return (
		<React.Fragment>
			<Header backgroundImage={true} authButton={true}>
				<Hero>
					<Hero.Card>
						<Hero.Title>Unlimited movies, TV shows, and more.</Hero.Title>
						<Hero.SubTitle>Watch anywhere. Cancel anytime.</Hero.SubTitle>
						<SignUp />
					</Hero.Card>
				</Hero>
			</Header>
			<Jumbotron />
			<Accordion>
				<SignUp />
			</Accordion>
			<Footer />
		</React.Fragment>
	);
}
