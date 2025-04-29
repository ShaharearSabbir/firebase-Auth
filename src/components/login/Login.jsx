import {
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase.init";

const Login = () => {
  const [user, setUser] = useState(null);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSignIn = (provider) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result.user);
        const loggedInUser = result.user;
        if (!loggedInUser.email && loggedInUser.providerData[1]?.email) {
          loggedInUser.email = loggedInUser.providerData[1]?.email;
          setUser(loggedInUser);
        }
        setUser(loggedInUser);
      })
      .catch((error) => console.error(error));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout done");
        setUser(null);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <h2>User Section</h2>
      {user ? (
        <button onClick={handleSignOut}>Sign Out</button>
      ) : (
        <>
          <button onClick={() => handleSignIn(googleProvider)}>
            Sign in with Google
          </button>
          <button onClick={() => handleSignIn(githubProvider)}>
            Sign In With Github
          </button>
        </>
      )}

      {user && (
        <div>
          <h2>{user.displayName}</h2>
          <p>{user.email}</p>
          <img src={user.photoURL} alt="" />
        </div>
      )}
    </div>
  );
};

export default Login;
