export default function selectionFilter({ series, movies }) {
	return {
		series: [
			{
				title: 'Documentaries',
				data: series.filter(item => item.genre === 'documentaries')
			},
			{
				title: 'Comedies',
				data: series.filter(item => item.genre === 'comedies')
			},
			{
				title: 'Children',
				data: series.filter(item => item.genre === 'children')
			},
			{
				title: 'Crime',
				data: series.filter(item => item.genre === 'crime')
			},
			{
				title: 'Feels Good',
				data: series.filter(item => item.genre === 'feel-good')
			}
		],
		movies: [
			{
				title: 'Drama',
				data: movies.filter(item => item.genre === 'drama')
			},
			{
				title: 'Thriller',
				data: movies.filter(item => item.genre === 'thriller')
			},
			{
				title: 'Children',
				data: movies.filter(item => item.genre === 'children')
			},
			{
				title: 'Suspense',
				data: movies.filter(item => item.genre === 'suspense')
			},
			{
				title: 'Romance',
				data: movies.filter(item => item.genre === 'romac')
			}
		]
	};
}
