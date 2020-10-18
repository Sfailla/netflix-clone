import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
	background: url(${({ src }) =>
			src ? `../images/misc/${src}.jpg` : '../images/misc/netflix-home-bg.jpg'})
		no-repeat center / cover;
	position: relative;

	&::after {
		content: '';
		height: auto;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, .4);
		background-image: linear-gradient(
			to top,
			rgba(0, 0, 0, .8) 0,
			rgba(0, 0, 0, 0) 60%,
			rgba(0, 0, 0, .8) 100%
		);
	}
`;

export const Container = styled.div`
	height: 100px;
	padding-top: 20px;
	width: 100%;
	max-width: 1920px;
	margin: 0 auto;
	background: transparent;
	z-index: 5;
`;

export const Frame = styled.div`
	margin: 0 3.5rem;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

export const Logo = styled.svg`
	padding-top: 8px;
	width: 167px;
	height: 53px;
	fill: #e50914;
	line-height: normal;

	@media (max-width: 1449px) {
		width: 134px;
		height: 44px;
	}

	@media (max-width: 949px) {
		width: 108px;
		height: 40px;
	}
`;

export const LogoLink = styled(Link)`
	display: block;
	width: 167px;
	height: 53px;

	@media (max-width: 1449px) {
		width: 134px;
		height: 44px;
	}

	@media (max-width: 949px) {
		width: 108px;
		height: 40px;
	}
`;

export const ButtonLink = styled(Link)`
  display: block;
  background-color: #e50914;
  width: 84px;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #f40612;
  }
`;

export const Button = styled.button`
	width: 100%;
	height: 100%;
	white-space: nowrap;
	background-color: transparent;
	border: none;
	outline: none;
	color: white;
	cursor: pointer;
`;
