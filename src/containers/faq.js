import React from 'react';
import FaqData from '../fixtures/faqs.json';

import { OptForm } from '../components';
import { Accordion } from '../components';

export default function AccordionContainer() {
	return (
		<Accordion>
			<Accordion.Title>Frequently Asked Questions</Accordion.Title>
			<Accordion.Frame>
				{FaqData.map(data => (
					<Accordion.Item key={data.id}>
						<Accordion.Header>{data.header}</Accordion.Header>
						<Accordion.Body>
							<Accordion.Content>{data.body}</Accordion.Content>
						</Accordion.Body>
					</Accordion.Item>
				))}
			</Accordion.Frame>
			<OptForm>
				<OptForm.Input placeHolder="this is an input" />
				<OptForm.Button>Click Me</OptForm.Button>
			</OptForm>
		</Accordion>
	);
}
