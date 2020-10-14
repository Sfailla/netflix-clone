import styled from 'styled-components/macro';

export const Item = styled.div`
	display: flex;
	border-bottom: 8px solid #222;
	padding: 50px 5%;
	color: white;
	overflow: hidden;
`;

export const Inner = styled.div`
	display: flex;
	flex-direction: ${({ direction }) => direction};
	align-items: center;
	justify-content: space-between;
	max-width: 1100px;
	margin: auto;
	width: 100%;

	@media (max-width: 1000px) {
		flex-direction: column;
	}
`;

export const Container = styled.div`
	@media (max-width: 100px) {
		${Item}: last-of-type h2 {
			margin-bottom: 50px;
		}
	}
`;

export const Pane = styled.div`
	width: 50%;
	position: relative;

	@media (max-width: 1000px) {
		width: 100%;
		padding: 0 45px;
		text-align: center;
	}
`;

export const Title = styled.h1`
	font-size: 50px;
	line-height: 1.1;
	margin-bottom: 8px;

	@media (max-width: 600px) {
		font-size: 35px;
	}
`;

export const Subtitle = styled.h2`
	font-size: 26px;
	font-weight: normal;
	line-height: normal;

	@media (max-width: 600px) {
		font-size: 18px;
	}
`;

export const ImageContainer = styled.div`
	width: 100%;
	height: 100%;
`;

export const Image = styled.img`
	max-width: 100%;
	height: auto;
	border: 0;
	position: relative;
	z-index: 2;
`;

export const Card = styled.div`
	width: 60%;
	height: 96px;
	min-width: 240px;
	border: 2px solid rgba(255, 255, 255, .25);
	box-shadow: 0 0 2em 0 #000;
	border-radius: 12px;
	margin: 0 auto;
	position: absolute;
	left: 50%;
	bottom: 8%;
	transform: translateX(-50%);
	background-color: #000000;
	z-index: 5;

	display: flex;
	align-items: center;
	padding: 8px 12px;

	&::after {
		content: '';
		width: 48px;
		height: 60px;
		display: block;
		background: url('/images/video/download-icon.gif') no-repeat center center / 100%;
	}
`;

export const CardImage = styled.img`
	max-width: 100%;
	border: 0;
	height: 80px;
	margin: 0 1em 0 0;
`;

export const Text = styled.div`
	flex: 1 1 auto;
	margin: .3em 0;
`;

export const CardTitle = styled.div`
	font-size: 1em;
	color: #fff;
	font-weight: 600;
`;

export const CardSubtitle = styled.div`
	font-size: .9em;
	color: #0071eb;
	font-weight: 400;
`;

export const Icon = styled.div``;

export const ImageOverlay = styled.div`
	width: 100%;
	height: 100%;
	max-width: ${({ maxWidth }) => maxWidth}%;
	max-height: ${({ maxHeight }) => maxHeight}%;
	top: ${({ top }) => top}%;
	position: absolute;
	left: 50%;
	transform: translate(-50%, -50%);
`;

export const Video = styled.video`
	width: 100%;
	height: 100%;
	display: inline-block;
	vertical-align: baseline;
	object-fit: contain;
`;

export const Source = styled.source``;
