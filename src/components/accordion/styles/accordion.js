import styled from 'styled-components/macro';

export const Container = styled.div`
	padding: 70px 45px;
	text-align: center;
	margin: 0 auto;
	position: relative;
	border-bottom: 8px solid #333;
`;

export const Title = styled.h1`
	font-size: 50px;
	line-height: 1.1;
	margin-top: 0;
	margin-bottom: 8px;
	color: white;
	text-align: center;
	letter-spacing: 2px;

	@media (max-width: 949px) {
		font-size: 40px;
	}

	@media (max-width: 740px) {
		font-size: 38px;
	}

	@media (max-width: 600px) {
		font-size: 35px;
	}

	@media (max-width: 549px) {
		font-size: 26px;
	}
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
`;

export const Frame = styled.div`
	width: 75%;
	max-width: 815px;
	margin: 32px auto;

	@media (max-width: 950px) {
		width: 90%;
		margin: 24px auto;
	}
`;

export const Item = styled.div`
  margin-bottom: 8px;
  position: relative;
  width: 100%;
  border: 0;

  display: block;
  text-align: left;
  background: #000;
}
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	text-transform: uppercase;
	margin-bottom: 1px;
	padding: .8em 2.2em .8em 1.2em;
	background-color: #303030;
	color: white;
	font-size: 26px;
	font-weight: 400;

	@media (max-width: 949px) {
		font-size: 20px;
	}

	@media (max-width: 650px) {
		font-size: 18px;
	}
`;

export const Body = styled.div`
	display: block;
	font-size: 23px;
	max-height: ${({ maxHeight }) => maxHeight}px;
	color: white;
	background-color: #303030;
	overflow: hidden;
	white-space: pre-wrap;

	transition: max-height .5s cubic-bezier(.5, 0, .1, 1);

	@media (max-width: 650px) {
		font-size: 18px;
	}
`;

export const Content = styled.span`
	width: 100%;
	height: 100%;
	display: block;
	padding: 19.2px;
`;

export const Svg = styled.svg`
	width: 30px;
	height: 30px;
	fill: #fff;
	transform: ${({ toggle }) => (toggle ? 'rotate(-45deg)' : 'rotate(0deg)')};
	transition: ${({ toggle }) =>
		toggle
			? 'transform .25s cubic-bezier(.5, 0, .1, 1)'
			: 'transform .5s cubic-bezier(.5, 0, .1, 1) .2s'};
`;
