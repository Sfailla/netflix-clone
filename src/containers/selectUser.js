import React from 'react';
import { SelectUser } from '../components';
import { FirebaseContext } from '../firebase';

export default function SelectUserContainer() {
	const { authUser } = React.useContext(FirebaseContext);

	return (
		<SelectUser>
			<SelectUser.Title>Whose watching?</SelectUser.Title>
			<SelectUser.List>
				<SelectUser.ListItem onClick={''}>
					<SelectUser.Avatar src={`/images/user/${authUser.photoURL}`} />
					<SelectUser.Username>{authUser.displayName}</SelectUser.Username>
				</SelectUser.ListItem>
			</SelectUser.List>
		</SelectUser>
	);
}
