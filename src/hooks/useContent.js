import useCollection from './useCollection';

export default function useContent() {
	const { movies } = useCollection('movies');
	const { series } = useCollection('series');

	return {
		movies,
		series
	};
}
