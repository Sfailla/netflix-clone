import styled from 'styled-components/macro';

export const Button = styled.button`
	padding: 0px 5px;
	margin-left: 1px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: hsla(0, 0%, 100%, .15);
	outline: none;
	border: 2px solid transparent;
	border-top-right-radius: 6px;
	border-top-left-radius: 6px;
	border-bottom-right-radius: 6px;
	border-bottom-left-radius: 6px;
	cursor: pointer;
	&:hover {
		border: 2px solid;
		border-color: hsla(0, 0%, 100%, .15);
		background-color: hsla(0, 0%, 100%, .2);
		border-top-left-radius: 0;
		border-bottom-left-radius: 0;
	}
	&:disabled {
		pointer-events: none;
	}

	transition: border .1s ease-in, background-color .1s ease-in;
`;

export const Input = styled.input`
	width: 0px;
	padding: 0;
	height: 35px;
	color: #efeff1;
	font-size: 14px;
	appearance: none;
	outline: 0;
	border: 0;
	background-color: hsla(0, 0%, 100%, .2);

	&:hover {
		border: 2px solid;
		border-color: hsla(0, 0%, 100%, .3);
	}

	&:focus + label {
		display: none;
	}

	transition: width .3s ease-in-out, border .1s ease-in, background-color .1s ease-in;
`;

export const Container = styled.div`
	width: auto;
	height: 35px;
	background-color: black;
	overflow: hidden;

	&:hover {
		& ${Input} {
			width: 200px;
			border: 2px solid;
			border-color: hsla(0, 0%, 100%, .1);
			border-top-left-radius: 6px;
			border-bottom-left-radius: 6px;

			&:focus {
				background-color: #000;
				outline: 0;
				border: 2px solid #e50914;
			}
		}
		& ${Button} {
			& > svg {
				fill: #000;
				transition: fill .4s ease-in-out;
			}
		}
	}
`;

export const Form = styled.form`
	width: 100%;
	height: 100%;
`;

export const FormGroup = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	position: relative;
`;

export const Label = styled.label`
	display: none;
	color: #efeff1;
	font-size: 14px;
	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);
`;
