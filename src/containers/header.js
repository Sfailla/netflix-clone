import React from 'react';
import { Header, Dropdown, Icon, Input } from '../components/index';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../firebase';
import useWindowSize from '../hooks/useWindowSize';

export default function HeaderContainer({
	backgroundImage,
	src,
	authButton,
	profile,
	children
}) {
	const { setRegister, authUser, firebase } = React.useContext(FirebaseContext);
	const { width } = useWindowSize();
	const handleClick = () => setRegister(null);

	return (
		<Header backgroundImage={backgroundImage} src={src}>
			<Header.Container>
				<Header.Frame>
					<Header.Wrapper direction={width < 700 ? 'column' : 'row'}>
						<Header.Logo to={ROUTES.HOME} />
						{profile && (
							<Header.Wrapper padding="8px 0 0 0" height={44} alignItems="center">
								<Header.NavLink to="#0">tv series</Header.NavLink>
								<Header.NavLink to="#1">movies</Header.NavLink>
							</Header.Wrapper>
						)}
					</Header.Wrapper>
					{authButton ? (
						<Header.SignInButton onClick={handleClick} to={ROUTES.SIGN_IN}>
							Sign In
						</Header.SignInButton>
					) : null}
					{profile && authUser ? (
						<Header.Profile>
							<Header.Search>
								<Input>
									<Input.Form>
										<Input.FormGroup>
											<Input.Input />
											<Input.Label>Search</Input.Label>
											<Input.Button type="button" disabled={false}>
												<Icon
													icon="search"
													viewBox="0 0 30 30"
													size={20}
													fill="#4e4e4e"
												/>
											</Input.Button>
										</Input.FormGroup>
									</Input.Form>
								</Input>
							</Header.Search>
							<Header.Avatar size={35} src={`/images/user/${authUser.photoURL}`} />
							<Dropdown>
								<Dropdown.Target>
									<Icon icon="chevron-down" size={25} viewBox="0 0 30 30" />
								</Dropdown.Target>
								<Dropdown.List>
									<Dropdown.ListItem>Profile</Dropdown.ListItem>
									<Dropdown.ListItem onClick={() => firebase.logout()}>
										Sign out
									</Dropdown.ListItem>
								</Dropdown.List>
							</Dropdown>
						</Header.Profile>
					) : null}
				</Header.Frame>
			</Header.Container>
			{children}
		</Header>
	);
}
