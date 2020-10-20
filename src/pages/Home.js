import React from 'react';
import { Hero, OptForm } from '../components';
import { Jumbotron, Footer, Accordion, Header } from '../containers';

export default function Home() {
	return (
		<React.Fragment>
			<Header>
				<Hero>
					<Hero.Card>
						<Hero.Title>Unlimited movies, TV shows, and more.</Hero.Title>
						<Hero.SubTitle>Watch anywhere. Cancel anytime.</Hero.SubTitle>
						<OptForm>
							<OptForm.Text>
								Ready to watch? Enter your email to create or restart your membership
							</OptForm.Text>
							<OptForm.Wrapper>
								<OptForm.EmailWrapper>
									<OptForm.Input />
									<OptForm.Label placeholder="Email address">
										Email address
									</OptForm.Label>
								</OptForm.EmailWrapper>
								<OptForm.Button>
									get started
									<OptForm.Svg
										viewBox="0 0 30 30"
										d="M19.875 15l-10.711-11.13c-0.402-0.405-0.402-1.060 0-1.469 0.402-0.405 1.051-0.405 1.454 0l11.745 11.862c0.402 0.406 0.402 1.064 0 1.469l-11.745 11.862c-0.402 0.406-1.051 0.405-1.454 0-0.402-0.404-0.402-1.060 0-1.469l10.711-11.125z"
									/>
								</OptForm.Button>
							</OptForm.Wrapper>
						</OptForm>
					</Hero.Card>
				</Hero>
			</Header>
			<Jumbotron />
			<Accordion />
			<Footer />
		</React.Fragment>
	);
}
