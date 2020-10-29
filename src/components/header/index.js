import React from 'react';
import {
	Background,
	BackgroundImg,
	Container,
	Frame,
	Logo,
	SignInButton,
	LogoLink,
	ButtonLink
} from './styles/header';

export default function Header({
	backgroundImage,
	authButton,
	children,
	...restProps
}) {
	return (
		<Background {...restProps}>
			{backgroundImage ? (
				<Header.BackgroundImg {...restProps}>{children}</Header.BackgroundImg>
			) : (
				children
			)}
		</Background>
	);
}

Header.BackgroundImg = function HeaderBackgroundImg({ children, ...restProps }) {
	return <BackgroundImg {...restProps}>{children}</BackgroundImg>;
};

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

Header.SignInButton = function HeaderSignInButton({ to, children, ...restProps }) {
	return (
		<ButtonLink to={to}>
			<SignInButton {...restProps}>{children}</SignInButton>
		</ButtonLink>
	);
};
