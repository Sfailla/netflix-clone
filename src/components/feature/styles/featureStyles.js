import styled from 'styled-components/macro';

export const Container = styled.div`
	width: 100%;
	height: 50vh;
	margin: 0;
	padding: 50px 56px;
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 5;
`;

export const Title = styled.h1`
	font-size: 30px;
	color: white;
	line-height: 1.2;
	letter-spacing: 2px;

	@media (max-width: 950px) {
		font-size: 26px;
	}
`;

export const Wrapper = styled.div`
	width: 50%;

	@media (max-width: 950px) {
		width: 60%;
	}

	@media (max-width: 700px) {
		width: 100%;
	}
`;

export const Body = styled.p`
	color: #cccccc;
	font-size: 18px;
	line-height: 1.1;

	@media (max-width: 950px) {
		font-size: 16px;
		line-height: normal;
	}
`;

export const Button = styled.button``;
