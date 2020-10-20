import React from 'react';
import { useAccordionContext } from './hooks';
import AccordionContext from './AccordionContext';

const useAccordionClick = (eventKey, onClick) => {
	const { onToggle, activeEventKey } = useAccordionContext();
	return event => {
		event.persist();
		onToggle(eventKey === activeEventKey ? null : eventKey);
		if (onClick) {
			console.log('clicked');
			onClick(event);
		}
	};
};

function Accordion({
	element: Component,
	activeEventKey,
	onToggle,
	children,
	...otherProps
}) {
	const context = React.useMemo(
		() => {
			return {
				activeEventKey,
				onToggle
			};
		},
		[ activeEventKey, onToggle ]
	);
	return (
		<AccordionContext.Provider value={context}>
			<Component {...otherProps}>{children}</Component>
		</AccordionContext.Provider>
	);
}

Accordion.Toggle = function Toggle({
	element: Component,
	eventKey,
	onClick,
	children,
	...otherProps
}) {
	const accordionClick = useAccordionClick(eventKey, onClick);

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
	const { activeEventKey } = useAccordionContext();

	return activeEventKey === eventKey ? (
		<Component {...otherProps}>{children}</Component>
	) : null;
};

export default Accordion;
