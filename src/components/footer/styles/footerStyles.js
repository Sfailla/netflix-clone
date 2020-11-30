import styled from 'styled-components/macro';

import { media } from '../../../sharedStyles';

export const Container = styled.div`
	padding: 45px 70px 0px 70px;
	margin: 0 auto;
	max-width: 1000px;
`;

export const Column = styled.div`
	width: 90%;
	margin: 0 auto;
`;

export const Row = styled.div``;

export const Card = styled.div`
	width: 100%;
	height: 100%;
	padding-bottom: 20px;
`;

export const Link = styled.a`
	display: inline-block;
	font-size: 13px;
	color: #757575;
	margin-bottom: 16px;
	text-decoration: none;
	padding-right: 12px;
	vertical-align: top;
	width: 25%;
	min-width: 100px;
	transition: .5s ease-in-out;

	&:hover {
		color: #0071eb;
	}

	${media.md`width: 33%;`};
	${media.sm`width: 50%;`};
`;

export const Title = styled.div`
	font-size: 16px;
	color: #fff;
	margin: 0 0 30px;
`;

export const Text = styled.div`
	font-size: 16px;
	color: #757575;
	margin-bottom: 40px;
`;

export const Break = styled.div`
	flex-basis: 100%;
	height: 0;
`;

export const Language = styled.div`
	display: block;
	margin-top: 20px;
`;

export const Wrapper = styled.div`
	display: inline-block;
	position: relative;

	& svg {
		position: absolute;
		cursor: pointer;

		&:first-of-type {
			top: 16px;
			left: 15px;
		}

		&:last-of-type {
			top: 15px;
			right: 10px;
		}
	}
`;

export const Select = styled.select`
	display: inline;
	background-color: black;
	background-image: none;
	border: 1px solid #333;
	color: #0071eb;
	font-size: 16px;
	padding: 12px 26px 12px 50px;
	appearance: none;
	line-height: 1.7;
	cursor: pointer;

	&:focus {
		outline: -webkit-focus-ring-color auto 1px;
	}
`;
export const Option = styled.option``;
