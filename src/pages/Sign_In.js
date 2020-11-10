import React from 'react';
import { Footer, SignIn } from '../containers';
import { Header } from '../components';
import * as ROUTES from '../constants/routes';
import { Container, Spacer } from '../sharedStyles';
import useWindowSize from '../hooks/useWindowSize';

export default function SignInPage() {
	const { width } = useWindowSize();
	return (
		<div>
			<Header>
				<Header.Background
					backgroundImage={width > 740 ? true : false}
					src="movieTitles"
				>
					<Container>
						<Header.Frame>
							<Header.Wrapper direction={width < 700 ? 'column' : 'row'}>
								<Header.Logo to={ROUTES.HOME} />
							</Header.Wrapper>
						</Header.Frame>
					</Container>
					<SignIn />
					<Spacer height={50} />
				</Header.Background>
			</Header>
			<Footer />
		</div>
	);
}
