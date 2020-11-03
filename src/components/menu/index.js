import React from 'react';
import {
	Container,
	Target,
	Wrapper,
	Label,
	List,
	ListItem
} from './styles/menuStyles';

import RippleAnimation from '../../animations/ripple/ripple';
import useClickOutsideRef from './hooks/useClickOutsideRef';

const MenuContext = React.createContext(null);

export default function Dropdown({ children, ...restProps }) {
	const [ toggleMenu, setToggleMenu ] = React.useState(false);
	const menuRef = React.useRef();

	const handleClick = () => setToggleMenu(prevState => !prevState);
	const handleCloseMenu = () => setToggleMenu(false);

	useClickOutsideRef(menuRef, handleCloseMenu);

	return (
		<MenuContext.Provider value={{ toggleMenu, handleClick }}>
			<Container ref={menuRef} {...restProps}>
				{children}
			</Container>
		</MenuContext.Provider>
	);
}

Dropdown.Target = function DropdownTarget({ children, ...restProps }) {
	const { handleClick } = React.useContext(MenuContext);
	return (
		<Target onClick={handleClick} {...restProps}>
			{children}
		</Target>
	);
};

Dropdown.Label = function DropdownLabel({ children, ...restProps }) {
	return <Label {...restProps}>{children}</Label>;
};

Dropdown.Wrapper = function DropdownWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Dropdown.List = function DropdownList({ children, ...restProps }) {
	const { toggleMenu } = React.useContext(MenuContext);
	return (
		<List height={toggleMenu ? '80' : '0'} {...restProps}>
			{children}
		</List>
	);
};

Dropdown.ListItem = function DropdownListItem({ children, ...restProps }) {
	return (
		<ListItem {...restProps}>
			{children}
			<RippleAnimation />
		</ListItem>
	);
};
