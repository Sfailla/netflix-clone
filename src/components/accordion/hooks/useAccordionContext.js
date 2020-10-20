import React from 'react';
import AccordionContext from '../AccordionContext';

const useAccordionContext = () => {
	const context = React.useContext(AccordionContext);
	if (!context) {
		throw new Error(
			'Accordion components are compound component. Must be used inside Accordion.'
		);
	}
	return context;
};

export default useAccordionContext;
