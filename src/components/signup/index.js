import React from 'react';
import {
	Container,
	Label,
	Input,
	Text,
	Button,
	Wrapper,
	Form,
	FormGroup,
	Error,
	Svg
} from './styles/signupStyles';

export default function SignUp({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

SignUp.Wrapper = function SignUpWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

SignUp.Form = function SignUpForm({ children, ...restProps }) {
	return <Form {...restProps}>{children}</Form>;
};

SignUp.FormGroup = function SignUpFormGroup({ children, ...restProps }) {
	return <FormGroup {...restProps}>{children}</FormGroup>;
};

SignUp.Input = function SignUpInput({ ...restProps }) {
	return <Input {...restProps} />;
};

SignUp.Label = function SignUpLabel({ children, ...restProps }) {
	return <Label {...restProps}>{children}</Label>;
};

SignUp.Error = function SignUpError({ children, ...restProps }) {
	return <Error {...restProps}>{children}</Error>;
};

SignUp.Text = function SignUpText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

SignUp.Button = function SignUpButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

SignUp.Svg = function SignUpSvg({ d, ...restProps }) {
	return (
		<Svg {...restProps}>
			<path d={d} />
		</Svg>
	);
};
