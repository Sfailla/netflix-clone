import React from 'react';
import useContent from '../hooks/useContent';
import selectionFilter from '../utils/filters/selectionFilter';

export default function BrowsePage() {
	const { movies, series } = useContent();

	return <div>this is the browse netflix page</div>;
}
