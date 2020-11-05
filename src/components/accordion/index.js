import React from 'react';
import { useAccordionClick, useEventKey } from './hooks';
import AccordionContext from './context';
import { Header, Body, Frame, Content, Item } from './styles/accordionStyles';

const Accordion = ({
	component: Component,
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

Accordion.Toggle = function Toggle({
	component: Component,
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
	component: Component,
	children,
	...otherProps
}) {
	return <Component {...otherProps}>{children}</Component>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	return <Body {...restProps}>{children}</Body>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Content = function AccordionContent({ children, ...restProps }) {
	return <Content {...restProps}>{children}</Content>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

export default Accordion;
