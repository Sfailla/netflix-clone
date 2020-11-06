import styled, { css, keyframes } from 'styled-components/macro';

export const Button = styled.button`
	padding: 0px 5px;
	margin-left: 1px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ open }) =>
		open ? 'hsla(0, 0%, 100%, .2)' : 'hsla(0, 0%, 100%, .15)'};
	outline: none;
	border: 2px solid;
	border-color: ${({ open }) => (open ? 'hsla(0, 0%, 100%, .15)' : 'transparent')};
	border-top-left-radius: ${({ open }) => (open ? '0px' : '6px')};
	border-bottom-left-radius: ${({ open }) => (open ? '0px' : '6px')};
	border-top-right-radius: 6px;
	border-bottom-right-radius: 6px;
	cursor: pointer;

	&:disabled {
		pointer-events: none;
	}

	& svg {
		fill: ${({ open }) => (open ? 'black' : '#4e4e4e')};
		transition: fill .4s ease-in-out;
	}

	transition: border .1s ease-in, background-color .1s ease-in;
`;

export const Container = styled.div`
	width: auto;
	height: 35px;
	background-color: black;
	overflow: hidden;
`;

export const Input = styled.input`
	width: ${({ open }) => (open ? '200' : '0')}px;
	padding: ${({ open }) => (open ? '5px 10px' : '0')};
	height: 35px;
	color: #efeff1;
	font-size: 14px;
	appearance: none;
	outline: 0;
	border: ${({ open }) => (open ? '2px solid' : '0')};
	border-color: hsla(0, 0%, 100%, .1);
	border-top-left-radius: 6px;
	border-bottom-left-radius: 6px;
	background-color: hsla(0, 0%, 100%, .2);

	&:hover {
		border: 2px solid;
		border-color: hsla(0, 0%, 100%, .3);
	}

	&:focus {
		background-color: #000;
		outline: 0;
		border: 2px solid #e50914;
	}

	&:focus + label,
	&:active + label,
	&:not(:placeholder-shown) + label {
		display: none;
	}

	transition: width .3s ease-in-out, border .1s ease-in, background-color .1s ease-in;
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

const displayLabel = keyframes`
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
`;

const displayLabelAnimation = css`
	animation: .4s ease-in ${displayLabel} forwards .3s;
`;

export const Label = styled.label`
	display: inline-block;
	color: #efeff1;
	font-size: 14px;
	opacity: 0;
	padding-left: 3px;

	position: absolute;
	left: 10px;
	top: 50%;
	transform: translateY(-50%);

	${({ open }) => (open ? displayLabelAnimation : null)};
`;
