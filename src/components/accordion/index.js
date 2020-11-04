import React from 'react';

import {
	Container,
	Inner,
	Title,
	Frame,
	Item,
	Header,
	Body,
	Content
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
