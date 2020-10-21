import React from 'react';
import FaqData from '../fixtures/faqs.json';

import AccordionStyles from '../components/accordion/accordionStyles';
import Accordion from '../components/accordion';
import { OptForm } from '../components';

export default function AccordionContainer() {
	const [ activeEventKey, setActiveEventKey ] = React.useState(0);

	return (
		<AccordionStyles>
			<AccordionStyles.Title>Frequently Asked Questions</AccordionStyles.Title>
			<Accordion
				activeEventKey={activeEventKey}
				onToggle={setActiveEventKey}
				element={AccordionStyles.Frame}
			>
				{FaqData.map(({ header, body, id }) => {
					return (
						<AccordionStyles.Item key={id}>
							<Accordion.Toggle element={AccordionStyles.Header} eventKey={id}>
								{header}
								<AccordionStyles.Svg toggle={activeEventKey === id} />
							</Accordion.Toggle>
							<Accordion.Collapse
								toggle={activeEventKey === id}
								eventKey={id}
								element={AccordionStyles.Body}
							>
								<AccordionStyles.Content>{body}</AccordionStyles.Content>
							</Accordion.Collapse>
						</AccordionStyles.Item>
					);
				})}
			</Accordion>
			<OptForm>
				<OptForm.Text>
					Ready to watch? Enter your email to create or restart your membership
				</OptForm.Text>
				<OptForm.Wrapper>
					<OptForm.EmailWrapper>
						<OptForm.Input />
						<OptForm.Label placeholder="Email address">Email address</OptForm.Label>
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
		</AccordionStyles>
	);
}
