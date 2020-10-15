import React from 'react';
import { Container, Input, Button, Svg } from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({ ...restProps }) {
	return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

OptForm.Svg = function OptFormSvg({ children, ...restProps }) {
	return <Svg {...restProps}>{children}</Svg>;
};
