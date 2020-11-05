import { useAccordionContext } from '.';

export default function useAccordionClick(eventKey, onClick) {
	const { onToggle, activeEventKey } = useAccordionContext();
	return event => {
		event.persist();
		onToggle(eventKey === activeEventKey ? null : eventKey);
		if (onClick) {
			onClick(event);
		}
	};
}
