import React from 'react';
import JumbotronData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

export default function JumbotronContainer() {
	return (
		<Jumbotron.Container>
			{JumbotronData.map(item => (
				<Jumbotron key={item.id} direction={item.direction}>
					<Jumbotron.Pane>
						<Jumbotron.Title>{item.title}</Jumbotron.Title>
						<Jumbotron.Subtitle>{item.subtitle}</Jumbotron.Subtitle>
					</Jumbotron.Pane>
					<Jumbotron.Pane>
						<Jumbotron.ImageContainer>
							<Jumbotron.Image src={item.image} alt={item.alt} />
							{item.videoCard ? (
								<Jumbotron.Overlay
									maxWidth={item.maxWidth}
									maxHeight={item.maxHeight}
									top={item.top}
								>
									<Jumbotron.Video autoPlay loop muted playsInline>
										<Jumbotron.Source src={item.video} type="video/mp4" />
									</Jumbotron.Video>
								</Jumbotron.Overlay>
							) : null}
							{item.imageCard ? (
								<Jumbotron.Card>
									<Jumbotron.CardImage src={item.cardImage} />
									<Jumbotron.Text>
										<Jumbotron.CardTitle>{item.cardTitle}</Jumbotron.CardTitle>
										<Jumbotron.CardSubtitle>
											{item.cardSubtitle}
										</Jumbotron.CardSubtitle>
									</Jumbotron.Text>
								</Jumbotron.Card>
							) : null}
						</Jumbotron.ImageContainer>
					</Jumbotron.Pane>
				</Jumbotron>
			))}
		</Jumbotron.Container>
	);
}
