import styled from 'styled-components/macro';

export const PageContainer = styled.div`
	width: 100%;
	height: 100%;
`;

export const Spacer = styled.div`
	display: block;
	height: ${({ height }) => height || 10}px;
`;
