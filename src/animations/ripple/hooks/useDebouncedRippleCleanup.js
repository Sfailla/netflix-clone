import React from 'react';

export default function useDebouncedRippleCleanUp(rippleCount, duration, cleanupFn) {
	React.useLayoutEffect(
		() => {
			let bounce = null;
			if (rippleCount > 0) {
				clearTimeout(bounce);

				bounce = setTimeout(() => {
					cleanupFn();
					clearTimeout(bounce);
				}, duration * 4);
			}

			return () => clearTimeout(bounce);
		},
		[ rippleCount, duration, cleanupFn ]
	);
}
