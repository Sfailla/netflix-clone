import React from 'react';
import { Svg, Path } from './styles/svg-styles';

export default function Icon({ viewBox, d, children, ...restProps }) {
	return (
		<Svg {...restProps}>
			<Path viewBox={viewBox} d={d} {...restProps} />
		</Svg>
	);
}
