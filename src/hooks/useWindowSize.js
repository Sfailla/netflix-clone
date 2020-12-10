import React from 'react';

function useWindowSize() {
	const [ windowSize, setWindowSize ] = React.useState({
		width: window.innerWidth,
		height: window.innerHeight
	});

	function changeWindowSize() {
		setWindowSize({ width: window.innerWidth, height: window.innerHeight });
	}

	React.useEffect(
		() => {
			window.addEventListener('resize', changeWindowSize);

			return () => {
				window.removeEventListener('resize', changeWindowSize);
			};
		},
		[ windowSize ]
	);

	return windowSize;
}

export default useWindowSize;
