import React from 'react';
import {
	Background,
	BackgroundImg,
	Container,
	Frame,
	Logo,
	SignInButton,
	LogoLink,
	ButtonLink,
	Wrapper,
	Target,
	Profile,
	Title,
	Avatar,
	Select,
	Svg,
	Option
} from './styles/header';

// MAIN HEADER STYLING

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

Header.BackgroundImg = function HeaderBackgroundImg({
	src,
	children,
	...restProps
}) {
	return (
		<BackgroundImg src={src} {...restProps}>
			{children}
		</BackgroundImg>
	);
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

// SIGNIN BUTTON STYLING

Header.SignInButton = function HeaderSignInButton({ to, children, ...restProps }) {
	return (
		<ButtonLink to={to}>
			<SignInButton {...restProps}>{children}</SignInButton>
		</ButtonLink>
	);
};

// PROFILE NAVIGATION STYLING

Header.Profile = function HeaderProfile({ children, ...restProps }) {
	return <Profile {...restProps}>{children}</Profile>;
};

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Header.Avatar = function HeaderAvatar({ children, ...restProps }) {
	return <Avatar {...restProps}>{children}</Avatar>;
};

Header.Title = function HeaderTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Header.Target = function HeaderTarget({ children, ...restProps }) {
	return <Target {...restProps}>{children}</Target>;
};

Header.Select = function HeaderSelect({ children, ...restProps }) {
	return <Select {...restProps}>{children}</Select>;
};

Header.Option = function HeaderOption({ children, ...restProps }) {
	return <Option {...restProps}>{children}</Option>;
};

Header.Svg = function HeaderSvg({ d, children, ...restProps }) {
	return (
		<Svg {...restProps}>
			<path d={d} />
		</Svg>
	);
};
