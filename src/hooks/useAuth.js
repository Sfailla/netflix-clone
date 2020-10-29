import React from 'react';
import firebase from '../firebase';

export default function useAuth() {
	const [ authUser, setAuthUser ] = React.useState(null);
	const [ isAuthPending, setIsAuthPending ] = React.useState(false);

	React.useEffect(() => {
		setIsAuthPending(true);
		const unSubscribe = firebase.auth.onAuthStateChanged(user => {
			if (user) {
				setAuthUser(user);
				setIsAuthPending(false);
			} else {
				setAuthUser(null);
				setIsAuthPending(false);
			}

			return () => unSubscribe();
		});
	}, []);

	return {
		authUser,
		isAuthPending
	};
}
