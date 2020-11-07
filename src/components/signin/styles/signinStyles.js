import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	width: 100%;
	margin: 0 auto;
	min-height: 100%;
	background-color: transparent;
	max-width: 450px;

	@media (max-width: 740px) {
		max-width: 100%;
		color: #333;
		margin: 0 auto;
		padding: 0 5%;
	}
`;

export const Card = styled.div`
	width: 100%;
	max-width: 450px;
	background-color: rgba(0, 0, 0, .75);
	border-radius: 4px;
	display: flex;
	flex-direction: column;
	position: relative;
	z-index: 5;

	@media (max-width: 740px) {
		max-width: 100%;
	}
`;

export const Title = styled.h1`
	color: #fff;
	font-size: 32px;
	font-weight: 700;
	margin-bottom: 28px;
`;

export const Message = styled.p`
	display: inline-block;
	color: ${({ color }) => (color ? color : 'white')};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : '17')}px;
	line-height: 1.2;
	padding-bottom: 20px;
`;

export const TextLink = styled(Link)`
	display: inline-block;
	color: white;
	text-decoration: none;
	padding-left: 10px;
`;

export const Span = styled.span`
	display: inline-block;
	font-size: inherit;
	color: #0071eb;
`;

export const Wrapper = styled.div`
	min-width: 380px;
	min-height: 660px;
	padding: 60px 68px 40px;

	@media (max-width: 740px) {
		min-height: 550px;
		padding: 60px 0 40px;
		flex-grow: 1;
	}
`;
export const Form = styled.form`
	width: inherit;
	height: inherit;
	padding-bottom: 30px;
`;

export const FormGroup = styled.div`
	padding-bottom: 16px;
	max-width: 100%;
`;

export const LabelAnimationWrapper = styled.div`
	width: 100%;
	height: 100%;
	position: relative;
	transition: all .2s ease-out;
`;

export const Input = styled.input`
	width: 100%;
	border-radius: 4px;
	border: 0;
	border-bottom: 2px solid #e87c03;
	height: 50px;
	line-height: 50px;
	padding: 16px 20px 0px;
	color: white;
	background-color: #333;

	&:focus {
		outline: 0;
		background: #454545;
	}

	&:focus + label,
	&:active + label,
	&:not(:placeholder-shown) + label {
		transform: translateY(0);
		top: 6px;
		font-weight: 700;
		font-size: 13px;
	}
`;
export const Label = styled.label`
	color: #fff;
	position: absolute;
	top: 50%;
	left: 20px;
	transform: translateY(-50%);
`;
export const Error = styled.p`
	display: inline-block;
	color: #e87c03;
	margin-bottom: -6px;
	padding: 6px 3px;
	font-size: 13px;
`;
export const Button = styled.button`
	width: 100%;
	padding: 16px;
	background: #e50914;
	border-radius: 4px;
	font-size: 16px;
	font-weight: 700;
	margin: 24px 0 12px;
	color: white;
	cursor: pointer;
	border: 0;
`;

export const SignUpLink = styled(Link)``;
export const HelpLink = styled(Link)``;
