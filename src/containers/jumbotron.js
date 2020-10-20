import React from 'react';
import JumbotronData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

export default function JumbotronContainer() {
	return (
		<Jumbotron>
			{JumbotronData.map(data => (
				<Jumbotron.Column key={data.id} direction={data.direction}>
					<Jumbotron.Pane>
						<Jumbotron.Title>{data.title}</Jumbotron.Title>
						<Jumbotron.Subtitle>{data.subtitle}</Jumbotron.Subtitle>
					</Jumbotron.Pane>
					<Jumbotron.Pane>
						<Jumbotron.ImageContainer>
							<Jumbotron.Image src={data.image} alt={data.alt} />
							{data.videoCard ? (
								<Jumbotron.Overlay
									maxWidth={data.maxWidth}
									maxHeight={data.maxHeight}
									top={data.top}
								>
									<Jumbotron.Video autoPlay loop muted playsInline>
										<Jumbotron.Source src={data.video} type="video/mp4" />
									</Jumbotron.Video>
								</Jumbotron.Overlay>
							) : null}
							{data.imageCard ? (
								<Jumbotron.Card>
									<Jumbotron.CardImage src={data.cardImage} />
									<Jumbotron.Text>
										<Jumbotron.CardTitle>{data.cardTitle}</Jumbotron.CardTitle>
										<Jumbotron.CardSubtitle>
											{data.cardSubtitle}
										</Jumbotron.CardSubtitle>
									</Jumbotron.Text>
								</Jumbotron.Card>
							) : null}
						</Jumbotron.ImageContainer>
					</Jumbotron.Pane>
				</Jumbotron.Column>
			))}
		</Jumbotron>
	);
}
