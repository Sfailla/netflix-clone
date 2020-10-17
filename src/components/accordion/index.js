import React from 'react';

import {
	Container,
	Inner,
	Title,
	Frame,
	Item,
	Header,
	Body,
	Content,
	Svg
} from './styles/accordion';

const ToggleContext = React.createContext();

export default function Accordion({ children, maxHeight, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
	const [ state, setState ] = React.useState({
		toggle: false,
		maxHeight: 0
	});

	return (
		<ToggleContext.Provider value={{ state, setState }}>
			<Item {...restProps}>{children}</Item>
		</ToggleContext.Provider>
	);
};

Accordion.Svg = function AccordionSvg({ d, ...restProps }) {
	return (
		<Svg {...restProps}>
			<path d={d} />
		</Svg>
	);
};

Accordion.Header = function AccordionHeader({ children, onClick, ...restProps }) {
	const { state, setState } = React.useContext(ToggleContext);
	const { toggle } = state;
	return (
		<Header
			onClick={() => {
				setState({
					toggle: !toggle,
					maxHeight: toggle ? 0 : 1200
				});
			}}
			{...restProps}
		>
			{children}
			<Accordion.Svg
				toggle={toggle}
				d="M23.73 16.23h-7.5v7.5h-2.461v-7.5h-7.5v-2.461h7.5v-7.5h2.461v7.5h7.5v2.461z"
				viewBox="0 0 30 30"
			/>
		</Header>
	);
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
	const { state } = React.useContext(ToggleContext);
	const { maxHeight, toggle } = state;
	console.log(toggle);
	return (
		<Body maxHeight={maxHeight} {...restProps}>
			{children}
		</Body>
	);
};

Accordion.Content = function AccordionContent({ children, ...restProps }) {
	return <Content {...restProps}>{children}</Content>;
};
