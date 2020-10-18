import React from 'react';
import {
	Background,
	Container,
	Frame,
	Logo,
	Button,
	LogoLink,
	ButtonLink
} from './styles/header';

export default function Header({ bg = true, children, ...restProps }) {
	return bg ? <Background {...restProps}>{children}</Background> : children;
}

Header.Container = function HeaderContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
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
