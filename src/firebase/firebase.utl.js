import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDDl5TGMMUJo4PnFQISE8LzKwKio5cPXA4",
    authDomain: "needs-ecommerce.firebaseapp.com",
    databaseURL: "https://needs-ecommerce.firebaseio.com",
    projectId: "needs-ecommerce",
    storageBucket: "needs-ecommerce.appspot.com",
    messagingSenderId: "383317042166",
    appId: "1:383317042166:web:9fad2c33205c870e9bddd7",
    measurementId: "G-J5C77D1JKQ"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = userRef.get();

	if (!snapShot.exist) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			})
		} catch (error){
			console.log('error message from user', error.message);
		}
	}
	return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;