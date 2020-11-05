import styled from 'styled-components/macro';

export const Container = styled.div`
	display: inline-block;
	cursor: pointer;
`;

export const Target = styled.div`
	width: 35px;
	height: 35px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	cursor: pointer;
`;

export const Wrapper = styled.div``;

export const Label = styled.label`
	width: 100%;
	height: 100%;
	cursor: inherit;
	color: white;
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	width: auto;
	height: ${({ height }) => height};
	overflow: hidden;
	font-size: 16px;
	font-family: Roboto;
	font-weight: 400;
	border-radius: 4px;
	background-color: white;

	position: absolute;
	top: 116%;
	right: 0px;

	transition: left 1s linear;
`;

export const ListItem = styled.li`
	width: auto;
	min-width: 100px;
	height: auto;
	min-height: 30px;
	position: relative;
	overflow: hidden;
	line-height: 1.5;
	padding: 6px 16px;
	color: rgba(0, 0, 0, 0.87);
	white-space: nowrap;
	letter-spacing: 1px;
	list-style: none;
	cursor: pointer;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	&:first-of-type {
		padding-top: 8px;
	}
	&:last-of-type {
		padding-bottom: 8px;
	}
	&:hover {
		text-decoration: none;
		background-color: #d8d8d8;
	}
`;
