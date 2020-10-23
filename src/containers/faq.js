import React from 'react';
import FaqData from '../fixtures/faqs.json';

import AccordionStyles from '../components/accordion/accordionStyles';
import Accordion from '../components/accordion';
import { SignUp } from '../containers';

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
			<SignUp />
		</AccordionStyles>
	);
}
