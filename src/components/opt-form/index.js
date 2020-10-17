import React from 'react';
import {
	Container,
	Label,
	Input,
	Text,
	Button,
	Wrapper,
	EmailWrapper,
	Svg
} from './styles/opt-form';

export default function OptForm({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

OptForm.Label = function OptFormLabel({ children, ...restProps }) {
	return <Label {...restProps}>{children}</Label>;
};

OptForm.Wrapper = function OptFormWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

OptForm.EmailWrapper = function OptFormEmailWrapper({ children, ...restProps }) {
	return <EmailWrapper {...restProps}>{children}</EmailWrapper>;
};

OptForm.Input = function OptFormInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};

OptForm.Text = function OptFormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

OptForm.Button = function OptFormButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

OptForm.Svg = function OptFormSvg({ d, ...restProps }) {
	return (
		<Svg {...restProps}>
			<path d={d} />
		</Svg>
	);
};
