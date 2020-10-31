import React from 'react';
import { useHistory } from 'react-router-dom';
import { SelectUser } from '../components';
import { FirebaseContext } from '../firebase';
import * as ROUTES from '../constants/routes';

export default function SelectProfile() {
	const history = useHistory();
	const { authUser } = React.useContext(FirebaseContext);

	return (
		<React.Fragment>
			<SelectUser>
				<SelectUser.Wrapper>
					<SelectUser.Title>Whose watching?</SelectUser.Title>
					<SelectUser.List>
						<SelectUser.ListItem onClick={() => history.push(ROUTES.BROWSE)}>
							<SelectUser.Avatar
								src={`/images/user/${authUser.photoURL}`}
								alt="avatar image"
							/>
							<SelectUser.Username>{authUser.displayName}</SelectUser.Username>
						</SelectUser.ListItem>
					</SelectUser.List>
				</SelectUser.Wrapper>
			</SelectUser>
		</React.Fragment>
	);
}
