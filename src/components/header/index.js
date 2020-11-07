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
	NavLink,
	Wrapper,
	Profile,
	Search,
	Avatar
} from './styles/headerStyles';
import { Icon } from '../index';

// MAIN HEADER STYLING

export default function Header({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Header.Background = function HeaderBackground({
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
};

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

Header.Frame = function HeaderFrame({ children, ...restProps }) {
	return <Frame {...restProps}>{children}</Frame>;
};

Header.NavLink = function HeaderNavLink({
	isActive = false,
	children,
	...restProps
}) {
	const [ activeClass, setActiveClass ] = React.useState(false);

	const handleActiveClass = () => {
		setActiveClass(prevState => !prevState);
	};

	return (
		<NavLink isActive={activeClass} onClick={handleActiveClass} {...restProps}>
			{children}
		</NavLink>
	);
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
	return (
		<LogoLink to={to}>
			<Logo {...restProps}>
				<Icon
					icon="netflix"
					width={167}
					height={53}
					fill={'#e50914'}
					viewBox="0 0 111 33"
				/>
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

Header.Search = function HeaderSearch({ children, ...restProps }) {
	return <Search {...restProps}>{children}</Search>;
};

Header.Avatar = function HeaderAvatar({ children, ...restProps }) {
	return <Avatar {...restProps}>{children}</Avatar>;
};

Header.Wrapper = function HeaderWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};
