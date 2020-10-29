import styled from 'styled-components/macro';

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	max-width: 80%;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Wrapper = styled.div`margin-bottom: 250px;`;

export const Title = styled.h1`
	display: block;
	color: white;
	font-size: 48px;
	text-align: center;
	font-weight: 500;
`;

export const Avatar = styled.img`
	width: 100px;
	height: 100px;
`;

export const Username = styled.h2`
	color: #808080;
	text-overflow: ellipsis;
	font-size: 18px;
	letter-spacing: 1px;
`;

export const List = styled.ul`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	list-style: none;
`;

export const ListItem = styled.li`
	cursor: pointer;
	padding: 0;

	&:hover ${Avatar} {
		border: 3px solid white;
	}

	&:hover ${Username} {
		font-weight: bold;
		color: #e5e5e5;
	}
`;
