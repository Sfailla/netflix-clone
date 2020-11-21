import styled from 'styled-components/macro';

export const Container = styled.div``;

export const Button = styled.button`
	background-color: transparent;
	color: #fff;
	border: 2px solid;
	border-color: #e6e6e6;
	outline: 0;
	padding: 10px 20px;
	border-radius: 5px;
	max-width: 130px;
	font-size: 20px;
	margin-top: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	transition: border-color 0.3s ease, color 0.3s ease;

	&:hover {
		border-color: #ff1e1e;
		color: #ff1e1e;
	}

	@media (max-width: 850px) {
		width: 100px;
		height: 30px;
		font-size: 12px;
	}
`;

export const Overlay = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.9);
	z-index: 50;
`;

export const Inner = styled.div`
	width: 100%;
	max-width: 900px;
	position: relative;
	margin: 0 auto;

	& iframe {
		width: 100%;
		height: 50%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);

		@media (max-width: 750px) {
			width: 75%;
			height: 40%;
		}
	}
`;

export const Close = styled.div`
	width: 25px;
	height: 25px;
	positon: absolute;
	right: 15px;
	top: 15px;
	cursor: pointer;

	background-color: lightpink;
`;

export const Iframe = styled.iframe`margin: 0 20px;`;
