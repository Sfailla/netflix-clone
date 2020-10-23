import React from 'react';
import { useAccordionContext } from './hooks';
import AccordionContext from './AccordionContext';

const useEventKey = (eventKey, onToggle) => {
	const [ activeEventKey, setActiveEventKey ] = React.useState(eventKey);

	React.useLayoutEffect(
		() => {
			setActiveEventKey(eventKey);
		},
		[ eventKey, onToggle ]
	);

	return [ activeEventKey, setActiveEventKey ];
};

const Accordion = ({
	element: Component,
	activeEventKey,
	onToggle,
	children,
	...otherProps
}) => {
	const [ eventKey, setEventKey ] = useEventKey(activeEventKey, onToggle);

	const handleToggle = React.useCallback(
		eventKey => {
			if (activeEventKey !== undefined) {
				onToggle(eventKey);
				return;
			}
			setEventKey(eventKey);
		},
		[ activeEventKey, onToggle, setEventKey ]
	);

	const context = React.useMemo(
		() => {
			return {
				activeEventKey: eventKey,
				onToggle: handleToggle
			};
		},
		[ eventKey, handleToggle ]
	);

	return (
		<AccordionContext.Provider value={context}>
			<Component {...otherProps}>{children}</Component>
		</AccordionContext.Provider>
	);
};

const AccordionClick = (eventKey, onClick) => {
	const { onToggle, activeEventKey } = useAccordionContext();
	return event => {
		event.persist();
		onToggle(eventKey === activeEventKey ? null : eventKey);
		if (onClick) {
			onClick(event);
		}
	};
};

Accordion.Toggle = function Toggle({
	element: Component,
	eventKey,
	onClick,
	children,
	...otherProps
}) {
	const accordionClick = AccordionClick(eventKey, onClick);

	return (
		<Component onClick={accordionClick} {...otherProps}>
			{children}
		</Component>
	);
};

Accordion.Collapse = function Collapse({
	element: Component,
	eventKey,
	children,
	...otherProps
}) {
	return <Component {...otherProps}>{children}</Component>;
};

export default Accordion;
