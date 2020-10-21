import React from 'react';
import {
	Background,
	BackgroundImg,
	Container,
	Navigation,
	Frame,
	Logo,
	Button,
	LogoLink,
	ButtonLink
} from './styles/header';

export default function Header({ bg, children, ...restProps }) {
	return (
		<Background bg={bg} {...restProps}>
			{bg && <Header.BackgroundImg {...restProps}>{children}</Header.BackgroundImg>}
			{children}
		</Background>
	);
}

Header.BackgroundImg = function HeaderBackgroundImg({ children, ...restProps }) {
	return <BackgroundImg {...restProps}>{children}</BackgroundImg>;
};

Header.Container = function HeaderContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Header.Navigation = function HeaderNavigation({ children, ...restProps }) {
	return <Navigation {...restProps}>{children}</Navigation>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

Header.Logo = function HeaderLogo({ children, to, d, ...restProps }) {
	return (
		<LogoLink to={to}>
			<Logo {...restProps}>
				<path d={d} />
			</Logo>
		</LogoLink>
	);
};

Header.Button = function HeaderButton({ children, to, ...restProps }) {
	return (
		<ButtonLink to={to}>
			<Button {...restProps}>{children}</Button>
		</ButtonLink>
	);
};
