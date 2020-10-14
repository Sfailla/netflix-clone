import React from 'react';
import {
	Container,
	Row,
	Column,
	Card,
	Link,
	Title,
	Text,
	Break,
	Language,
	Wrapper,
	Select,
	Option,
	Globe,
	Arrow
} from './styles/footer';

export default function Footer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Footer.Row = function FooterRow({ children, ...restProps }) {
	return <Row {...restProps}>{children}</Row>;
};

Footer.Column = function FooterColumn({ children, ...restProps }) {
	return <Column {...restProps}>{children}</Column>;
};

Footer.Card = function FooterCard({ children, ...restProps }) {
	return <Card {...restProps}>{children}</Card>;
};

Footer.Link = function FooterLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

Footer.Title = function FooterTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Footer.Text = function FooterText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Footer.Break = function FooterBreak({ children, ...restProps }) {
	return <Break {...restProps}>{children}</Break>;
};

Footer.Language = function FooterLanguage({ children, ...restProps }) {
	return <Language {...restProps}>{children}</Language>;
};

Footer.Wrapper = function FooterWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Footer.Select = function FooterSelect({ children, ...restProps }) {
	return <Select {...restProps}>{children}</Select>;
};

Footer.Option = function FooterOption({ children, ...restProps }) {
	return <Option {...restProps}>{children}</Option>;
};

Footer.Globe = function FooterGlobe({ children, ...restProps }) {
	return <Globe {...restProps}>{children}</Globe>;
};

Footer.Arrow = function FooterArrow({ children, ...restProps }) {
	return <Arrow {...restProps}>{children}</Arrow>;
};
