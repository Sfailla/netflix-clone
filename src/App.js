import React from 'react';
import JumbotronData from './fixtures/jumbo.json';
import Jumbotron from './components/jumbotron';

function App() {
	return (
		<Jumbotron.Container>
			{JumbotronData.map(item => (
				<Jumbotron key={item.id} direction={item.direction}>
					<Jumbotron.Pane>
						<Jumbotron.Title>{item.title}</Jumbotron.Title>
						<Jumbotron.Subtitle>{item.subtitle}</Jumbotron.Subtitle>
					</Jumbotron.Pane>
					<Jumbotron.Pane>
						<Jumbotron.Image src={item.image} alt={item.alt} />
					</Jumbotron.Pane>
				</Jumbotron>
			))}
		</Jumbotron.Container>
	);
}

export default App;
