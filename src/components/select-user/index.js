import React from 'react';
import {
	Container,
	Title,
	Wrapper,
	List,
	ListItem,
	Avatar,
	Username
} from './styles/selectUserStyles';

export default function SelectUser({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

SelectUser.Title = function SelectUser({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

SelectUser.Wrapper = function SelectUserWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

SelectUser.List = function SelectUserList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

SelectUser.ListItem = function SelectUserListItem({ children, ...restProps }) {
	return <ListItem {...restProps}>{children}</ListItem>;
};

SelectUser.Avatar = function SelectUserAvatar({ src, children, ...restProps }) {
	return (
		<Avatar src={src ? src : '/images/videos/loading.gif'} {...restProps}>
			{children}
		</Avatar>
	);
};

SelectUser.Username = function SelectUserUsername({ children, ...restProps }) {
	return <Username {...restProps}>{children}</Username>;
};
