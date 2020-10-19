import styled from 'styled-components/macro';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	margin-top: 20px;
	flex-wrap: wrap;
	flex-direction: column;
	max-width: 950px;
	margin: 0 auto;

	@media (max-width: 1000px) {
		align-items: center;
	}
`;

export const Label = styled.label`
	font-size: 16px;
	color: #8c8c8c;

	position: absolute;
	top: 50%;
	left: 10px;
	transform: translateY(-50%);
	transition: all .1s ease;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	margin-bottom: 10px;

	@media (max-width: 800px) {
		flex-direction: column;
	}
`;

export const EmailWrapper = styled.div`
	width: 100%;
	max-width: 500px;
	height: auto;
	position: relative;
`;

export const Input = styled.input`
	width: 100%;
	padding: 10px;
	height: 70px;
	&:focus {
		border-color: #0071eb;
		outline: 0;
	}
	&:focus + label {
		transform: translateY(0);
		top: 6px;
		font-weight: 700;
		font-size: 13px;
	}

	@media (max-width: 800px) {
		margin: 10px auto;
		&:focus + label {
			top: 17px;
		}
	}

	@media (max-width: 750px) {
		height: 48px;
		padding-top: 20px;
		&:focus + label {
			top: 17px;
			font-size: 11px;
		}
	}
`;

export const Button = styled.button`
	min-height: 70px;
	display: flex;
	align-items: center;
	height: 1000%;
	background-color: #e50914;
	color: white;
	text-transform: uppercase;
	padding: 0 32px;
	font-size: 26px;
	border: 0;
	white-space: nowrap;
	cursor: pointer;
	&:hover {
		background-color: #f40612;
	}

	@media (max-width: 800px) {
		min-width: 74px;
		min-height: 40px;
		font-size: 16px;
		margin: .25em auto;
		padding: 0 1em;
	}
`;

export const Svg = styled.svg`
	fill: white;
	height: 20px;
	padding-left: 7px;
`;

export const Text = styled.p`
	text-align: center;
	font-size: 20px;
	font-weight: 400;
	padding-bottom: 20px;
	color: white;
`;
