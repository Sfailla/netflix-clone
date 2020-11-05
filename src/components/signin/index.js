import React from 'react';

import {
	Container,
	Title,
	Message,
	TextLink,
	Span,
	Card,
	Wrapper,
	Form,
	FormGroup,
	Input,
	Label,
	LabelAnimationWrapper,
	Error,
	Button,
	HelpLink,
	SignUpLink
} from './styles/signinStyles';

export default function SignIn({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

SignIn.Title = function SignInTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

SignIn.Message = function SignInMessage({
	fontSize,
	color,
	children,
	...restProps
}) {
	return (
		<Message fontSize={fontSize} color={color} {...restProps}>
			{children}
		</Message>
	);
};

SignIn.TextLink = function SignInTextLink({ to, children, ...restProps }) {
	return (
		<TextLink to={to} {...restProps}>
			{children}
		</TextLink>
	);
};

SignIn.Span = function SignInSpan({ children }) {
	return <Span>{children}</Span>;
};

SignIn.Card = function SignInCard({ children, ...restProps }) {
	return <Card {...restProps}>{children}</Card>;
};

SignIn.Wrapper = function SignInWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

SignIn.Form = function SignInForm({ children, ...restProps }) {
	return <Form {...restProps}>{children}</Form>;
};

SignIn.FormGroup = function SignInFormGroup({ children, ...restProps }) {
	return <FormGroup {...restProps}>{children}</FormGroup>;
};

SignIn.LabelAnimationWrapper = function SignInLabelAnimationWrapper({ children }) {
	return <LabelAnimationWrapper>{children}</LabelAnimationWrapper>;
};

SignIn.Input = function SignInInput({ children, ...restProps }) {
	return <Input {...restProps} />;
};

SignIn.Label = function SignInLabel({ children, ...restProps }) {
	return <Label {...restProps}>{children}</Label>;
};

SignIn.Error = function SignInError({ children, ...restProps }) {
	return <Error {...restProps}>{children}</Error>;
};

SignIn.Button = function SignInButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

SignIn.HelpLink = function SignInHelpLink({ children, ...restProps }) {
	return <HelpLink {...restProps}>{children}</HelpLink>;
};

SignIn.SignUpLink = function SignInSignUpLink({ children, ...restProps }) {
	return <SignUpLink {...restProps}>{children}</SignUpLink>;
};
