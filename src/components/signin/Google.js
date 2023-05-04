import React from "react";
import {
	getAuth,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
} from "firebase/auth";
import app from "../../firebase/firebase.init";
const auth = getAuth(app);

const Google = () => {
	const provider = new GoogleAuthProvider();

	const signInWithGoogle = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result.user);
			})
			.catch((err) => console.log(err));
	};

	const signOutHandler = () => {
		signOut(auth)
			.then((result) => console.log(result))
			.catch((err) => console.log(err));
	};

	return (
		<div>
			<h1>Google Authentication </h1>
			<button onClick={signInWithGoogle}>sign in with google</button>
			<button onClick={signOutHandler}>signout</button>
		</div>
	);
};

export default Google;
