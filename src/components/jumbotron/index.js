import React from 'react';
import {
	Container,
	Item,
	Inner,
	Pane,
	Title,
	Subtitle,
	Card,
	CardImage,
	CardTitle,
	CardSubtitle,
	Icon,
	Text,
	Image,
	Video,
	Source,
	ImageContainer,
	ImageOverlay
} from './styles/jumbotron';

function Jumbotron({ children, direction = 'row', overlay, ...restProps }) {
	return (
		<Item>
			<Inner {...restProps} direction={direction}>
				{children}
			</Inner>
		</Item>
	);
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
	return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Jumbotron.Subtitle = function JumbotronSubtitle({ children, ...restProps }) {
	return <Subtitle {...restProps}>{children}</Subtitle>;
};

Jumbotron.ImageContainer = function JumbotronImageContainer({
	children,
	...restProps
}) {
	return <ImageContainer {...restProps}>{children}</ImageContainer>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
	return <Image {...restProps} />;
};

Jumbotron.Card = function JumbotronImageCard({ children, ...restProps }) {
	return <Card {...restProps}>{children}</Card>;
};

Jumbotron.CardImage = function JumbotronImage({ ...restProps }) {
	return <CardImage {...restProps} />;
};

Jumbotron.CardTitle = function JumbotronCardTitle({ children, ...restProps }) {
	return <CardTitle {...restProps}>{children}</CardTitle>;
};

Jumbotron.CardSubtitle = function JumbotronCardSubtitle({ children, ...restProps }) {
	return <CardSubtitle {...restProps}>{children}</CardSubtitle>;
};

Jumbotron.Text = function JumbotronCardText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Jumbotron.AnimatedIcon = function JumbotronCardAnimation({
	children,
	...restProps
}) {
	return <Icon {...restProps} />;
};

Jumbotron.Overlay = function JumbotronImageOverlay({ children, ...restProps }) {
	return <ImageOverlay {...restProps}>{children}</ImageOverlay>;
};

Jumbotron.Video = function JumbotronVideo({ children, ...restProps }) {
	return <Video {...restProps}>{children}</Video>;
};

Jumbotron.Source = function JumbotronVideoSource({ ...restProps }) {
	return <Source {...restProps} />;
};

export default Jumbotron;
