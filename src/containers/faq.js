import React from 'react';
import FaqData from '../fixtures/faqs.json';

import { FrequentQuestions, Accordion, Icon } from '../components';

export default function AccordionContainer({ children }) {
	const [ activeEventKey, setActiveEventKey ] = React.useState(0);
	const { Frame, Header, Body } = Accordion;

	return (
		<FrequentQuestions>
			<FrequentQuestions.Title>Frequently Asked Questions</FrequentQuestions.Title>
			<Accordion
				activeEventKey={activeEventKey}
				onToggle={setActiveEventKey}
				component={Frame}
			>
				{FaqData.map(({ header, body, id }) => {
					return (
						<Accordion.Item key={id} toggle={activeEventKey === id}>
							<Accordion.Toggle component={Header} eventKey={id}>
								{header}
								<Icon icon="plus" viewBox="0 0 30 30" width={30} height={30} />
							</Accordion.Toggle>
							<Accordion.Collapse
								toggle={activeEventKey === id}
								eventKey={id}
								component={Body}
							>
								<Accordion.Content>{body}</Accordion.Content>
							</Accordion.Collapse>
						</Accordion.Item>
					);
				})}
			</Accordion>
			{children}
		</FrequentQuestions>
	);
}
