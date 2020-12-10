import React from 'react';
import { Hero, Header } from '../components';
import { Jumbotron, Footer, SignUp, Accordion } from '../containers';
import * as ROUTES from '../constants/routes';
import useWindowSize from '../hooks/useWindowSize';
import { FirebaseContext } from '../firebase';
import { Container } from '../sharedStyles';

export default function Home() {
	const { setRegister } = React.useContext(FirebaseContext);
	const { width } = useWindowSize();

	return (
		<React.Fragment>
			<Header>
				<Header.Background backgroundImage={true} src={'movieTitles'}>
					<Container>
						<Header.Frame>
							<Header.Wrapper direction={width < 700 ? 'column' : 'row'}>
								<Header.Logo to={ROUTES.HOME} />
							</Header.Wrapper>

							<Header.SignInButton
								onClick={() => setRegister(null)}
								to={ROUTES.SIGN_IN}
							>
								Sign In
							</Header.SignInButton>
						</Header.Frame>
						<Hero>
							<Hero.Card>
								<Hero.Title>Unlimited movies, TV shows, and more.</Hero.Title>
								<Hero.SubTitle>Watch anywhere. Cancel anytime.</Hero.SubTitle>
								<SignUp />
							</Hero.Card>
						</Hero>
					</Container>
				</Header.Background>
			</Header>

			<Jumbotron />
			<Accordion>
				<SignUp />
			</Accordion>
			<Footer />
		</React.Fragment>
	);
}
