import styled from 'styled-components/macro';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	margin-bottom: 50px;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Group = styled.div`
	margin: 30px 0;
	padding: 0;
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	gap: 10px;
`;

export const Title = styled.h1`
	font-size: 24px;
	color: #e5e5e5;
	font-weight: bold;
	text-transform: uppercase;
	letter-spacing: 2px;

	@media (max-width: 1000px) {
		font-size: 20px;
		line-height: 20px;
		margin-bottom: 10px;
	}
`;

export const Subtitle = styled.h2`
	font-size: 12px;
	color: #fff;
	font-weight: bold;
	margin: 0;
	user-select: none;
`;

export const Text = styled.p`
	font-size: 10px;
	color: #fff;
	margin-top: 5px;
	margin-bottom: 0;
	user-select: none;
	line-height: normal;
`;

export const Feature = styled.div`
	position: relative;
	margin: 0;
	height: 360px;
	background: url(${({ src }) => src}) no-repeat center right / cover;
	display: flex;

	@media (max-width: 1000px) {
		height: 180px;
	}
`;

export const FeatureTitle = styled(Title)`
  font-weight: normal;
  margin-left: 0;
`;

export const FeatureText = styled(Text)`
  font-size: 18px;
  font-weight: normal;
  color: #e6e6e6;

  @media (max-width: 1000px) {
    font-size: 14px;
  }
`;

export const FeatureClose = styled.button`
	color: white;
	position: absolute;
	right: 10px;
	top: 10px;
	cursor: pointer;
	background-color: transparent;
	border: 0;
	outline: 0;
`;

export const Rating = styled.div`
	background-color: transparent;
	border: 2px solid;
	border-color: ${({ rating }) => (rating >= 18 ? 'red' : 'green')};
	border-radius: 3px;
	width: 60px;
	height: 30px;
	padding: 5px;
	text-align: center;
	color: white;
	font-weight: bold;
	text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	font-size: 12px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Selection = styled.div`

  margin: 56px 0px;
  max-width: 500px;
  line-height: normal;

  @media (max-width: 1000px) {
    margin: 30px; 0;
  }

  @media (max-width: 850px) {
    max-width: 75%;
  }
`;

export const Metadata = styled.div``;

export const Entities = styled.div`
	display: flex;
	width: 100%;
	height: 150px;
`;

export const Image = styled.img`
	width: 100%;
	min-width: 150px;
	height: 100%;
	object-fit: cover;
	cursor: pointer;
	transition: transform .1s ease-in-out;
`;

export const Item = styled.div`
	width: 100%;
	height: 100%;
	flex-grow: 1;
	border: 3px solid;
	border-color: ${({ isActive }) => (isActive ? 'white' : 'transparent')};

	&:hover {
		${({ isActive }) => !isActive && 'transform: scale(1.05)'};
	}

	transition: transform .1s ease-in-out;

	${({ isActive }) => isActive && 'transform: scale(1.1)'};
	${({ isActive }) => isActive && 'position: relative'};
	${({ isActive }) => isActive && 'z-index: 5'};

	${({ isActive }) =>
		isActive &&
		`
    &::after {
      content: '';
      display: block;
      width: 0;
      height: 0;
      border-left: 20px solid transparent;
      border-right: 20px solid transparent;
      border-top: 20px solid #fff;
  
      position: absolute;
      bottom: -22px;
      left: 50%;
      transform: translateX(-50%);
  
      transition: all .1s ease-in .1s;
    }`};
`;
