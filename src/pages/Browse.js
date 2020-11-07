import React from 'react';
import { Feature } from '../components';
import { Header, Browse } from '../containers';
import useContent from '../hooks/useContent';
import selectionFilter from '../utils/filters/selectionFilter';

export default function BrowsePage() {
	const { movies, series } = useContent();
	const contentList = selectionFilter({ series, movies });
	const src = 'joker1';

	return (
		<React.Fragment>
			<Header backgroundImage={true} src={src} profile={true}>
				<Feature>
					<Feature.Wrapper>
						<Feature.Title>Watch Joker Now</Feature.Title>
						<Feature.Body>
							Forever alone in a crowd, failed comedian Arthur Flexk seeks connection
							as he walks the streets of Gotham City. Arthur wears two masks -- the
							one he paints for his day job as a clown, and the guise he projects in
							a futile attempt to feel like he's a part of the world around him.
						</Feature.Body>
						<Feature.Button>Play now</Feature.Button>
					</Feature.Wrapper>
				</Feature>
			</Header>
			<Browse contentList={contentList} />
		</React.Fragment>
	);
}
