import React from 'react';
import { FirebaseContext } from '../firebase';

export default function useCollection(collection) {
	const [ content, setContent ] = React.useState([]);
	const [ isLoading, setIsLoading ] = React.useState(false);
	const { firebase } = React.useContext(FirebaseContext);

	React.useEffect(
		() => {
			setIsLoading(true);
			const unsubscribe = firebase.db.collection(collection).onSnapshot(snapshot => {
				const collectionData = snapshot.docs.map(doc => {
					return {
						id: doc.id,
						...doc.data()
					};
				});
				setContent(collectionData);
				setIsLoading(false);
			});
			return () => unsubscribe;
		},
		[ collection, firebase.db ]
	);

	return { [collection]: content, isLoading };
}
