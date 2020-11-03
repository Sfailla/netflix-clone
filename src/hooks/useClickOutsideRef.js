import React from 'react';

export default function useClickOutsideRef(ref, closeMenu) {
	React.useEffect(
		() => {
			const listener = event => {
				// do nothing if we are clicking target ref or descendents
				if (!ref.current || ref.current.contains(event.target)) {
					return;
				}

				closeMenu(event);
			};

			document.addEventListener('mousedown', listener);
			document.addEventListener('touchstart', listener);

			return () => {
				document.removeEventListener('mousedown', listener);
				document.removeEventListener('touchstart', listener);
			};
		},
		[ ref, closeMenu ]
	);
}
