import styled from 'styled-components/macro';

export const Svg = styled.svg`
	width: ${({ width, size }) => width || size}px;
	height: ${({ height, size }) => height || size}px;
	fill: ${({ fill }) => fill};
`;
export const Path = styled.path``;
