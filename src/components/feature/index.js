import React from 'react';
import { Container, Title, Wrapper, Body, Button } from './styles/featureStyles';

export default function Feature({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Feature.Wrapper = function FeatureWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Feature.Title = function FeatureTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Feature.Body = function FeatureBody({ children, ...restProps }) {
	return <Body {...restProps}>{children}</Body>;
};

Feature.Button = function FeatureButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};
