import React from 'react';
import {
	Feature,
	Dropdown,
	Header,
	SearchInput,
	Icon,
	VideoPlayer
} from '../components';
import { Browse } from '../containers';
import { Container } from '../sharedStyles';
import { FirebaseContext } from '../firebase';
import { useContent, useWindowSize, useForm } from '../hooks';
import selectionFilter from '../utils/filters/selectionFilter';
import * as ROUTES from '../constants/routes';

export default function BrowsePage() {
	const { authUser, firebase } = React.useContext(FirebaseContext);
	const { handleChange, handleSubmit, values } = useForm({ search: '' });
	const { movies, series } = useContent();
	const { width } = useWindowSize();
	const [ category, setCategory ] = React.useState('series');

	const contentList = selectionFilter({ series, movies });
	const { search } = values;

	return (
		<Container
			padding={'0 10px'}
			containerQueries={{
				md: { padding: '0 20px' },
				lg: { padding: '0 30px' },
				xl: { padding: '0 50px' }
			}}
		>
			<Header>
				<Header.Background backgroundImage={true} src={'joker'}>
					<Container
						containerQueries={{
							lg: { height: '60vh' },
							xl: { height: '75vh' }
						}}
					>
						<Header.Frame>
							<Header.Wrapper direction={width < 700 ? 'column' : 'row'}>
								<Header.Logo to={ROUTES.HOME} />
								<Header.Wrapper padding="8px 0 0 0" height={44} alignItems="center">
									<Header.NavLink
										onClick={() => setCategory('series')}
										isActive={category === 'series'}
									>
										tv series
									</Header.NavLink>
									<Header.NavLink
										onClick={() => setCategory('movies')}
										isActive={category === 'movies'}
									>
										movies
									</Header.NavLink>
								</Header.Wrapper>
							</Header.Wrapper>
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
								<Header.Wrapper>
									<Dropdown>
										<Dropdown.Target>
											<Header.Avatar
												size={35}
												src={`/images/user/${authUser.photoURL}`}
											/>
											<Icon icon="carrot-down" size={25} viewBox="0 0 30 30" />
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
						</Header.Frame>

						<Feature>
							<Feature.Wrapper>
								<Feature.Title>Watch Joker Now</Feature.Title>
								<Feature.Body>
									Forever alone in a crowd, failed comedian Arthur Flexk seeks
									connection as he walks the streets of Gotham City. Arthur wears two
									masks -- the one he paints for his day job as a clown, and the
									guise he projects in a futile attempt to feel like he's a part of
									the world around him.
								</Feature.Body>
								<VideoPlayer>
									<VideoPlayer.Button />
									<VideoPlayer.Video trailer="zAGVQLHvwOY" />
								</VideoPlayer>
							</Feature.Wrapper>
						</Feature>
					</Container>
				</Header.Background>
			</Header>
			<Container>
				<Browse contentList={contentList} category={category} />
			</Container>
		</Container>
	);
}
