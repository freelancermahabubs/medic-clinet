/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  // console.log(user);
  //create user
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const updateName = (currentUser, name) => {
    return updateProfile(currentUser, {
      displayName: name,
    });
  };

  //login user
  const loginUser = (email, password) => {
    setLoader(true);
    console.log(email, password);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //reset password
  const forgetPass = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // log out
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };
  //googlewith signin
  const googleSignIn = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  //getUser

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
      if (createUser && currentUser?.email) {
        const loggedUser = {
          email: currentUser?.email,
        };
        fetch("https://medic-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("jwt res", data);
            // warning: Local storage is not the best (second best place) to store access token
            localStorage.setItem("medic-access-token", data.token);
          });
      } else {
        localStorage.removeItem("medic-access-token");
      }
    });
    return () => unSubscribe();
  }, []);

  const authInfo = {
    user,
    createUser,
    updateName,
    loginUser,
    forgetPass,
    logOut,
    googleSignIn,
    loader,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
