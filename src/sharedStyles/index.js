import styled, { css } from 'styled-components/macro';

export const SCREEN_SIZES = {
	sm: 576,
	md: 720,
	lg: 960,
	xl: 1140
};

export const media = Object.keys(SCREEN_SIZES).reduce((accumulator, label) => {
	// use em in breakpoints to work properly cross-browser and support users
	// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
	const emSize = SCREEN_SIZES[label] / 16;
	accumulator[label] = (...args) => css`
		@media (min-width: ${emSize}em) {
			${css(...args)};
		}
	`;
	return accumulator;
}, {});

export const formatCss = styleObject => {
	return JSON.stringify(styleObject).replace(/[{}"']/g, '').replace(/,/g, ';') + ';';
};

export const mapQueries = queries => {
	return Object.keys(queries).map(
		key => media[key]`
			${formatCss(queries[key])}
		`
	);
};

export const Container = styled.div`
	width: ${({ width }) => (width ? width : '100%')};
	height: ${({ height }) => (height ? height : '100%')};
	padding: ${({ padding }) => (padding ? padding : '0')};

	${({ containerQueries }) =>
		containerQueries ? mapQueries(containerQueries) : null};
`;

export const Spacer = styled.div`
	display: block;
	height: ${({ height }) => (height ? height : 10)}px;
`;
