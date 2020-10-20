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

export default function AccordionStyles({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

AccordionStyles.Header = function AccordionHeader({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
};

AccordionStyles.Body = function AccordionBody({ children, ...restProps }) {
	return <Body {...restProps}>{children}</Body>;
};

AccordionStyles.Content = function AccordionContent({ children, ...restProps }) {
	return <Content {...restProps}>{children}</Content>;
};

AccordionStyles.Svg = function AccordionSvg({ ...restProps }) {
	return (
		<Svg viewBox="0 0 30 30" {...restProps}>
			<path d="M23.73 16.23h-7.5v7.5h-2.461v-7.5h-7.5v-2.461h7.5v-7.5h2.461v7.5h7.5v2.461z" />
		</Svg>
	);
};

AccordionStyles.Title = function AccordionTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

AccordionStyles.Frame = function AccordionFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

AccordionStyles.Item = function AccordionItem({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};
