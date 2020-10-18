import React from 'react';
import { Container, Card, Title, SubTitle, Text } from './styles/hero';

export default function Hero({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Hero.Card = function HeroCard({ children, ...restProps }) {
	return <Card {...restProps}>{children}</Card>;
};

Hero.Title = function HeroTitle({ children }) {
	return <Title>{children}</Title>;
};

Hero.SubTitle = function HeroSubTitle({ children }) {
	return <SubTitle>{children}</SubTitle>;
};

Hero.Text = function HeroText({ children }) {
	return <Text>{children}</Text>;
};
