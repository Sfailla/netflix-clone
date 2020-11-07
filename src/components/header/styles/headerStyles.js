import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Background = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;

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

export const BackgroundImg = styled.div`
	background: url(${({ src }) =>
			src ? `../images/misc/${src}.jpg` : '../images/misc/netflix-home-bg.jpg'})
		no-repeat center / cover;
`;

export const Container = styled.div`
	width: 100%;
	height: 160px;
	max-width: 1920px;
	margin: 0 auto;
	padding-top: 20px;
	background: transparent;
	position: relative;
	z-index: 5;
`;

export const Frame = styled.div`
	margin: 0 56px;
	height: 100%;
	display: flex;
	justify-content: space-between;
`;

export const Logo = styled.div`
	padding-top: 8px;
	line-height: normal;

	& svg {
		@media (max-width: 1449px) {
			width: 134px;
			height: 44px;
		}

		@media (max-width: 949px) {
			width: 112px;
			height: 40px;
		}
	}
`;

export const LogoLink = styled(Link)`
	display: flex;
	width: 167px;
	height: 53px;



	@media (max-width: 1449px) {
		width: 134px;
		height: 44px;
	}

	@media (max-width: 949px) {
		width: 112px;
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

export const NavLink = styled.a`
	display: inline-block;
	color: ${({ isActive }) => (isActive ? 'white' : 'grey')};
	text-transform: uppercase;
	letter-spacing: 1px;
	font-size: 16px;
	white-space: nowrap;
	padding-left: 10px;
	text-decoration: none;
	cursor: pointer;

	&.active {
		color: white;
		font-weight: bold;
	}

	@media (max-width: 700px) {
		&:first-of-type {
			padding-left: 0;
		}
	}
`;

export const ActiveClass = styled(NavLink)`
	color: white;
	font-weight: bold;
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
	display: flex;
	gap: 15px;
	height: 35px;
	margin-top: 8px;
	position: relative;
`;

export const Search = styled.div`
	width: auto;
	height: 35px;
`;

export const Wrapper = styled.div`
	height: ${({ height }) => height + 'px' || '100%'};
	padding: ${({ padding }) => padding || null};
	display: flex;
	flex-direction: ${({ direction }) => direction || 'row'};
	justify-content: ${({ justifyContent }) => justifyContent || 'flex-start'};
	align-items: ${({ alignItems }) => alignItems || null};
`;

export const Avatar = styled.img`
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
`;
