import styled from 'styled-components';

export const Container = styled.div`
	padding: 70px 45px;
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
`;

export const Link = styled.a`
	display: inline-block;
	font-size: 13px;
	color: #757575;
	margin-bottom: 16px;
	text-decoration: none;
	white-space: nowrap;

	padding-right: 12px;
	vertical-align: top;
	width: 25%;
	min-width: 100px;

	@media (max-width: 740px) {
		width: 33%;
	}

	@media (max-width: 500px) {
		width: 50%;
	}
`;

export const Title = styled.div`
	font-size: 16px;
	color: #757575;
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
	&:focus {
		outline: -webkit-focus-ring-color auto 1px;
	}
`;
export const Option = styled.option``;

export const Globe = styled.svg.attrs({
	version: '1.1',
	xmlns: 'http://www.w3.org/2000/svg',
	xmlnsXlink: 'http://www.w3.org/1999/xlink'
})`
	fill: #FFF;
	width: 20px;
	height: 20px;
	position: absolute;
	top: 16px;
	left: 15px;
`;

export const Arrow = styled.svg.attrs({
	version: '1.1',
	xmlns: 'http://www.w3.org/2000/svg',
	xmlnsXlink: 'http://www.w3.org/1999/xlink'
})`
	fill: #FFF;
	width: 19px;
	height: 23px;
	position: absolute;
	top: 15px;
	right: 10px;
`;
