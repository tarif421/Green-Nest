import React, { createContext, useEffect, useState } from "react";
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // log in
  const logIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign out
  const logOut = () => {
    return signOut(auth);
  };

  // use effect / observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // authDaTA
  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    logIn,
    loading,
    setLoading,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
