import React from 'react';
import { Header, Dropdown, Icon, SearchInput } from '../components/index';
import * as ROUTES from '../constants/routes';
import { FirebaseContext } from '../firebase';
import useForm from '../hooks/useForm';
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
	const { handleChange, handleSubmit, values } = useForm({ search: '' });

	const { search } = values;
	const handleClick = () => setRegister(null);

	return (
		<Header backgroundImage={backgroundImage} src={src}>
			<Header.Container>
				<Header.Frame>
					<Header.Wrapper direction={width < 700 ? 'column' : 'row'}>
						<Header.Logo to={ROUTES.HOME} />
						{profile && (
							<Header.Wrapper padding="8px 0 0 0" height={44} alignItems="center">
								<Header.NavLink href="#0">tv series</Header.NavLink>
								<Header.NavLink href="#1">movies</Header.NavLink>
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
								<SearchInput>
									<SearchInput.Form onSubmit={handleSubmit}>
										<SearchInput.FormGroup>
											<SearchInput.Input
												onChange={handleChange}
												name="search"
												type="text"
												value={search}
												placeholder=" "
											/>
											<SearchInput.Label>Search</SearchInput.Label>
											<SearchInput.Button type="button">
												<Icon icon="search" viewBox="0 0 30 30" size={20} />
											</SearchInput.Button>
										</SearchInput.FormGroup>
									</SearchInput.Form>
								</SearchInput>
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
