import React from 'react';

export default function useEventKey(eventKey, onToggle) {
	const [ activeEventKey, setActiveEventKey ] = React.useState(eventKey);

	React.useLayoutEffect(
		() => {
			setActiveEventKey(eventKey);
		},
		[ eventKey, onToggle ]
	);

	return [ activeEventKey, setActiveEventKey ];
}
