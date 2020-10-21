import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Container = styled.div`
	width: 100%;
	margin: 0 auto 90px auto;
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
	max-height: 671px;
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

export const Wrapper = styled.div`
	min-width: 380px;
	min-height: 660px;
	padding: 60px 68px 40px;
	margin-bottom: 90px;

	@media (max-width: 740px) {
		min-height: 550px;
		flex-grow: 1;
	}
`;
export const Form = styled.form``;
export const FormGroup = styled.div``;
export const Input = styled.input``;
export const Label = styled.label``;
export const Error = styled.p``;
export const Button = styled.button``;
export const SignUpLink = styled(Link)``;
export const HelpLink = styled(Link)``;
