import React from 'react';
import { Header, Dropdown, Icon } from '../components/index';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../firebase';

export default function HeaderContainer({
	backgroundImage,
	src,
	authButton,
	profile,
	children
}) {
	const { setRegister, authUser, firebase } = React.useContext(FirebaseContext);
	const handleClick = () => setRegister(null);
	return (
		<Header backgroundImage={backgroundImage} src={src}>
			<Header.Container>
				<Header.Frame>
					<Header.Logo to={ROUTES.HOME} />
					{authButton ? (
						<Header.SignInButton onClick={handleClick} to={ROUTES.SIGN_IN}>
							Sign In
						</Header.SignInButton>
					) : null}
					{profile && authUser ? (
						<Header.Profile>
							<Header.Wrapper>
								<Header.Avatar size={35} src={`/images/user/${authUser.photoURL}`} />
								<Dropdown>
									<Dropdown.Target>
										<Dropdown.Label>
											<Icon
												width={30}
												height={30}
												fill="white"
												viewBox="0 0 30 30"
												d="M3.75 16.25h22.5c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25h-22.5c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25zM3.75 8.75h22.5c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25h-22.5c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25zM3.75 23.75h22.5c0.69 0 1.25-0.56 1.25-1.25s-0.56-1.25-1.25-1.25h-22.5c-0.69 0-1.25 0.56-1.25 1.25s0.56 1.25 1.25 1.25z"
											/>
										</Dropdown.Label>
									</Dropdown.Target>
									<Dropdown.List>
										<Dropdown.ListItem>Profile</Dropdown.ListItem>
										<Dropdown.ListItem onClick={() => firebase.logout()}>
											Sign out
										</Dropdown.ListItem>
									</Dropdown.List>
								</Dropdown>
							</Header.Wrapper>
						</Header.Profile>
					) : null}
				</Header.Frame>
			</Header.Container>
			{children}
		</Header>
	);
}
