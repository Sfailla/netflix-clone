import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
`;

export const BackgroundImg = styled.div`
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
	width: 100%;
	height: 100px;
	max-width: 1920px;
	margin: 0 auto;
	padding-top: 20px;
	background: transparent;
	Position: relative;
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
	margin-top: 8px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: #f40612;
  }
`;

export const SignInButton = styled.button`
	width: 100%;
	height: 100%;
	white-space: nowrap;
	background-color: transparent;
	border: none;
	outline: none;
	color: white;
	cursor: pointer;
`;

export const Profile = styled.div`
	display: inline;
	height: auto;
	padding-top: 8px;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	position: relative;
`;

export const Avatar = styled.img`
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	margin-right: 10px;
`;

export const Title = styled.h3``;

export const Target = styled.div`
	width: 40px;
	height: 20px;
	background: lightpink;
`;

export const Select = styled.select`
	width: 25px;
	background: transparent;
	appearance: none;
	outline: none;
	border: none;
`;

export const Svg = styled.svg`
	width: 23px;
	height: 19px;
	fill: white;
	position: absolute;
	left: 48px;
`;

export const Option = styled.option``;
