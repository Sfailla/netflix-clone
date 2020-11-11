import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import firebaseConfig from './config';
import randomAvatar from '../utils/helpers/randomAvatar';

randomAvatar();

// Initialize Firebase
class Firebase {
	constructor() {
		app.initializeApp(firebaseConfig);
		this.auth = app.auth();
		this.db = app.firestore();
	}

	async register(email, name, password) {
		const newUser = await this.auth.createUserWithEmailAndPassword(email, password);

		return await newUser.user.updateProfile({
			displayName: name.toLowerCase(),
			photoURL: randomAvatar()
		});
	}

	async login(email, password) {
		return await this.auth.signInWithEmailAndPassword(email, password);
	}

	async logout() {
		await this.auth.signOut();
	}

	async resetPassword(email) {
		await this.auth.sendPasswordResetEmail(email);
	}
}

const firebase = new Firebase();
export default firebase;
