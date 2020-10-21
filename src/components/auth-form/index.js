import React from 'react';

import {
	Container,
	Title,
	Wrapper,
	Input,
	Label,
	Error,
	Button,
	HelpLink,
	SignUpLink
} from './styles/form';

export default function Form({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Form.Title = function FormTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Form.Wrapper = function FormWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Form.Input = function FormInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};

Form.Label = function FormLabel({ children, ...restProps }) {
	return <Label {...restProps}>{children}</Label>;
};

Form.Error = function FormError({ children, ...restProps }) {
	return <Error {...restProps}>{children}</Error>;
};

Form.Button = function FormButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Form.HelpLink = function FormHelpLink({ children, ...restProps }) {
	return <HelpLink {...restProps}>{children}</HelpLink>;
};

Form.SignUpLink = function FormSignUpLink({ children, ...restProps }) {
	return <SignUpLink {...restProps}>{children}</SignUpLink>;
};
