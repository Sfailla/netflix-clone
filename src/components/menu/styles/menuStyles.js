import styled from 'styled-components/macro';

export const Container = styled.div`
	display: inline-block;
	cursor: pointer;
	position: relative;
`;

export const Target = styled.div`
	width: auto;
	height: auto;
	cursor: inherit;
	padding: 5px;
`;

export const Wrapper = styled.div``;

export const Label = styled.label`
	cursor: inherit;
	color: white;
`;

export const List = styled.ul`
	display: ${({ display }) => display};
	width: auto;
	height: auto;
	font-size: 16px;
	font-family: Roboto;
	font-weight: 400;
	border-radius: 4px;
	background-color: white;
	padding: 8px 0;

	position: absolute;
	top: 100%;
	left: 0;
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

	&:hover {
		text-decoration: none;
		background-color: #d8d8d8;
	}
`;
