import styled from 'styled-components/macro';

export const Container = styled.div`
	width: 100%;
	height: 40vh;
	margin: 0;
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
	display: flex;
	flex-direction: column;
	gap: 20px;

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

export const Button = styled.button`
	background-color: #e6e6e6;
	color: #000;
	border: 0;
	outline: 0;
	padding: 10px 20px;
	border-radius: 5px;
	max-width: 130px;
	font-size: 20px;
	margin-top: 10px;
	cursor: pointer;
	transition: background-color 0.3s ease, color 0.3s ease;

	&:hover {
		background-color: #ff1e1e;
		color: white;
	}
`;
