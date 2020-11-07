import React from 'react';
import { Hero, Header } from '../components';
import { Jumbotron, Footer, SignUp, Accordion } from '../containers';
import * as ROUTES from '../constants/routes';
import useWindowSize from '../hooks/useWindowSize';
import { FirebaseContext } from '../firebase';

export default function Home() {
	const { setRegister } = React.useContext(FirebaseContext);
	const { width } = useWindowSize();
	const handleClick = () => setRegister(null);
	return (
		<React.Fragment>
			<Header>
				<Header.Background backgroundImage={true} src={'movieTitles'}>
					<Header.Frame>
						<Header.Wrapper direction={width < 700 ? 'column' : 'row'}>
							<Header.Logo to={ROUTES.HOME} />
						</Header.Wrapper>

						<Header.SignInButton onClick={handleClick} to={ROUTES.SIGN_IN}>
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
