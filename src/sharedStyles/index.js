import styled from 'styled-components/macro';

export const Container = styled.div`
	width: 100%;
	height: 100%;
	padding: 0 56px;
	overflow-x: hidden;

	@media (max-width: 700px) {
		padding: 0 10px;
	}
`;

export const Spacer = styled.div`
	display: block;
	height: ${({ height }) => height || 10}px;
`;
