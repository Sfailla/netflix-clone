import React from 'react';
import { Svg, Path } from './styles/svg-styles';

export default function Icon({ viewBox, d, children, ...restProps }) {
	return (
		<Svg viewBox={viewBox} {...restProps}>
			<Path d={d} {...restProps} />
		</Svg>
	);
}
