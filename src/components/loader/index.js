import React from 'react';
import { Container, Positioner, Image } from './styles/loaderStyles';
import randomAvatar from '../../utils/randomAvatar';

export default function Loader({ children, ...restProps }) {
	return (
		<Container>
			<Positioner>
				<Image src={`/images/user/${randomAvatar()}`} {...restProps} />
			</Positioner>
		</Container>
	);
}
