import React from 'react';
import { Header, SelectUser } from '../containers';

export default function SelectProfile({ setProfile }) {
	return (
		<React.Fragment>
			<Header />
			<SelectUser />
		</React.Fragment>
	);
}
