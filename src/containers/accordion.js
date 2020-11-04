import React from 'react';
import FaqData from '../fixtures/faqs.json';

import { AccordionComponent } from '../components';
import Accordion from '../components/accordion/Accordion';

export default function AccordionContainer({ children }) {
	const [ activeEventKey, setActiveEventKey ] = React.useState(0);
	const { Frame, Header, Body } = AccordionComponent;

	return (
		<AccordionComponent>
			<AccordionComponent.Title>Frequently Asked Questions</AccordionComponent.Title>
			<Accordion
				activeEventKey={activeEventKey}
				onToggle={setActiveEventKey}
				component={Frame}
			>
				{FaqData.map(({ header, body, id }) => {
					return (
						<AccordionComponent.Item key={id}>
							<Accordion.Toggle component={Header} eventKey={id}>
								{header}
								<AccordionComponent.Svg toggle={activeEventKey === id} />
							</Accordion.Toggle>
							<Accordion.Collapse
								toggle={activeEventKey === id}
								eventKey={id}
								component={Body}
							>
								<AccordionComponent.Content>{body}</AccordionComponent.Content>
							</Accordion.Collapse>
						</AccordionComponent.Item>
					);
				})}
			</Accordion>
			{children}
		</AccordionComponent>
	);
}
