import React from 'react';
import firebase from '../firebase';

export default function useAuth() {
	const [ authUser, setAuthUser ] = React.useState(null);
	const [ isLoading, setIsLoading ] = React.useState(false);

	React.useEffect(() => {
		setIsLoading(true);
		const unSubscribe = firebase.auth.onAuthStateChanged(user => {
			if (user) {
				setAuthUser(user);
				setIsLoading(false);
			} else {
				setAuthUser(null);
				setIsLoading(false);
			}

			return () => unSubscribe();
		});
	}, []);

	return {
		authUser,
		isLoading
	};
}
