import styled from 'styled-components/macro';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	overflow-x: auto;
	margin-bottom: 50px;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const Group = styled.div`
	margin: 30px 0;
	padding: 0;
`;

export const Title = styled.h1`
	font-size: 24px;
	color: #e5e5e5;
	font-weight: bold;

	margin-left: 56px;
`;

export const Subtitle = styled.h2``;

export const Text = styled.p``;

export const Feature = styled.div``;

export const FeatureTitle = styled(Title)`
  margin-left: 0;
`;

export const FeatureText = styled(Text)``;

export const FeatureClose = styled.button`cursor: pointer;`;

export const Rating = styled.div``;

export const Selection = styled.div``;

export const Metadata = styled.div`
	display: none;
	position: absolute;
	bootm: 0;
	padding: 10px;
	background-color: #000000008F;
`;

export const Entities = styled.div`
	display: flex;
	gap: 5px;
	margin-left: 56px;
`;

export const Image = styled.img`
	width: 100%;
	max-width: 305px;
	min-width: 150px;
	cursor: pointer;
	border: 0;
	padding: 0;
	margin: 0;
	transition: transform .1s ease-in-out;

	&:hover {
		transform: scale(1.1);
	}
`;

export const Item = styled.div`
	display: inline-block;
	height: 100%;
`;
