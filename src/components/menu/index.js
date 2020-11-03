import React from 'react';
import {
	Container,
	Target,
	Wrapper,
	Label,
	List,
	ListItem
} from './styles/menuStyles';

import Ripple from '../../animations/ripple/ripple';
import useClickOutsideRef from '../../hooks/useClickOutsideRef';

const MenuContext = React.createContext(null);

export default function Dropdown({ children, ...restProps }) {
	const [ toggleMenu, setToggleMenu ] = React.useState(false);
	const menuRef = React.useRef();

	const handleClick = () => setToggleMenu(prevState => !prevState);

	const handleCloseMenu = React.useCallback(
		() => {
			setToggleMenu(false);
		},
		[ setToggleMenu ]
	);

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
		<List display={toggleMenu ? 'block' : 'none'} {...restProps}>
			{children}
		</List>
	);
};

Dropdown.ListItem = function DropdownListItem({ children, ...restProps }) {
	return (
		<ListItem {...restProps}>
			{children}
			<Ripple />
		</ListItem>
	);
};
