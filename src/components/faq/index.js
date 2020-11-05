import React from 'react';

import { Container, Inner, Title } from './styles/faqStyles';

export default function FrequentQuestions({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Inner>{children}</Inner>
		</Container>
	);
}

FrequentQuestions.Title = function FrequentQuestionsTitle({
	children,
	...restProps
}) {
	return <Title {...restProps}>{children}</Title>;
};
