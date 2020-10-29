import React from 'react';
import { Container, Image } from './styles/loaderStyles';

export default function Loader({ children, ...restProps }) {
	return (
		<Container {...restProps}>
			<Image src={'/images/misc/spinner.png'} {...restProps}>
				{children}
			</Image>;
		</Container>
	);
}
