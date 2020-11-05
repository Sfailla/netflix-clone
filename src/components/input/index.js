import React from 'react';
import {
	Container,
	Form,
	FormGroup,
	Input,
	Label,
	Button
} from './styles/inputStyles';

export default function CustomInput({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

CustomInput.Form = function CustomInputForm({ children, ...restProps }) {
	return <Form {...restProps}>{children}</Form>;
};

CustomInput.FormGroup = function CustomInputFormGroup({ children, ...restProps }) {
	return <FormGroup {...restProps}>{children}</FormGroup>;
};

CustomInput.Input = function MyInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};

CustomInput.Label = function CustomInputLabel({ children, ...restProps }) {
	return <Label {...restProps}>{children}</Label>;
};

CustomInput.Button = function CustomInputButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};
