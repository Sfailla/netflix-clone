import React from 'react';
import footerLinks from '../fixtures/footerLinks.json';
import { Footer, Icon } from '../components';

export default function FooterContainer() {
	return (
		<Footer>
			<Footer.Card>
				<Footer.Row>
					<Footer.Column>
						<Footer.Title>Questions? contact us</Footer.Title>
						<Footer.Break />
						{footerLinks.map(link => (
							<Footer.Link href={link.href}>{link.name}</Footer.Link>
						))}
						<Footer.Language>
							<Footer.Wrapper>
								<Icon
									icon="globe"
									viewBox="0 0 32 32"
									width={20}
									height={20}
									fill="white"
								/>
								<Footer.Select>
									<Footer.Option>English</Footer.Option>
									<Footer.Option>Espanol</Footer.Option>
								</Footer.Select>
								<Icon
									icon="chevron-right"
									viewBox="0 0 24 24"
									width={19}
									height={23}
									fill="white"
								/>
							</Footer.Wrapper>
						</Footer.Language>
					</Footer.Column>
				</Footer.Row>
			</Footer.Card>
		</Footer>
	);
}
