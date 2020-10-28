import React from 'react';
import BrowseContainer from '../containers/browse';
import useContent from '../hooks/useContent';
import selectionFilter from '../utils/filters/selectionFilter';

export default function BrowsePage() {
	const { movies, series } = useContent();
	const { contentList } = selectionFilter({ series, movies });

	return <BrowseContainer contentList={contentList} />;
}
