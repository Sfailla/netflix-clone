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
} from './styles/accordionStyles';

export default function AccordionComponent({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

AccordionComponent.Header = function AccordionComponentHeader({
	children,
	...restProps
}) {
	return <Header {...restProps}>{children}</Header>;
};

AccordionComponent.Body = function AccordionComponentBody({
	children,
	...restProps
}) {
	return <Body {...restProps}>{children}</Body>;
};

AccordionComponent.Content = function AccordionComponentContent({
	children,
	...restProps
}) {
	return <Content {...restProps}>{children}</Content>;
};

AccordionComponent.Svg = function AccordionComponentSvg({ ...restProps }) {
	return (
		<Svg viewBox="0 0 30 30" {...restProps}>
			<path d="M23.73 16.23h-7.5v7.5h-2.461v-7.5h-7.5v-2.461h7.5v-7.5h2.461v7.5h7.5v2.461z" />
		</Svg>
	);
};

AccordionComponent.Title = function AccordionComponentTitle({
	children,
	...restProps
}) {
	return <Title {...restProps}>{children}</Title>;
};

AccordionComponent.Frame = function AccordionComponentFrame({
	children,
	...restProps
}) {
	return <Frame {...restProps}>{children}</Frame>;
};

AccordionComponent.Item = function AccordionComponentItem({
	children,
	...restProps
}) {
	return <Item {...restProps}>{children}</Item>;
};
