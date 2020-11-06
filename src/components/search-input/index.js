import React from 'react';
import useClickOutsideRef from '../../hooks/useClickOutsideRef';
import {
	Container,
	Form,
	FormGroup,
	Input,
	Label,
	Button
} from './styles/inputStyles';

const SearchBarContext = React.createContext(null);

export default function SearchInput({ children, ...restProps }) {
	const [ open, setOpen ] = React.useState(false);
	const searchRef = React.useRef(null);

	const button = document.getElementsByTagName('button')[0];
	button &&
		button.addEventListener('mouseenter', () => {
			if (open) return;
			setOpen(true);
		});

	const handleCloseSearch = () => setOpen(false);
	useClickOutsideRef(searchRef, handleCloseSearch);

	return (
		<SearchBarContext.Provider value={{ open }}>
			<Container ref={searchRef} {...restProps}>
				{children}
			</Container>
		</SearchBarContext.Provider>
	);
}

SearchInput.Form = function SearchInputForm({ children, ...restProps }) {
	return <Form {...restProps}>{children}</Form>;
};

SearchInput.FormGroup = function SearchInputFormGroup({ children, ...restProps }) {
	return <FormGroup {...restProps}>{children}</FormGroup>;
};

SearchInput.Input = function MyInput({ children, ...restProps }) {
	const { open } = React.useContext(SearchBarContext);
	return (
		<Input
			open={open}
			autoComplete="off"
			autoCorrect="off"
			spellCheck="off"
			{...restProps}
		>
			{children}
		</Input>
	);
};

SearchInput.Button = function SearchInputButton({ children, ...restProps }) {
	const { open } = React.useContext(SearchBarContext);
	return (
		<Button open={open} {...restProps}>
			{children}
		</Button>
	);
};

SearchInput.Label = function SearchInputLabel({ children, ...restProps }) {
	const { open } = React.useContext(SearchBarContext);
	return (
		<Label open={open} {...restProps}>
			{children}
		</Label>
	);
};
