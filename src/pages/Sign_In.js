import React from 'react';
import { Header, Footer, SignIn } from '../containers';
import useWindowSize from '../hooks/useWindowSize';

export default function SignInPage() {
	const { width } = useWindowSize();
	return (
		<React.Fragment>
			<Header backgroundImage={width > 740 ? true : false}>
				<SignIn />
			</Header>
			<Footer />
		</React.Fragment>
	);
}
