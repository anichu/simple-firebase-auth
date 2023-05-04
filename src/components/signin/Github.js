import { getAuth, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import React from "react";
import app from "../../firebase/firebase.init";

const auth = getAuth(app);
const Github = () => {
	const provider = new GithubAuthProvider();

	const signInHandler = () => {
		signInWithPopup(auth, provider)
			.then((result) => {
				console.log(result);
			})
			.catch((err) => console.error(err));
	};
	return (
		<div>
			<h1>Github authentication</h1>
			<button onClick={signInHandler}>signin</button>
		</div>
	);
};

export default Github;
