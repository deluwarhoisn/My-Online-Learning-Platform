import React, { createContext, useEffect, useState } from "react";
import app from "../services/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";
import toast from "react-hot-toast";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Email/password sign up
  const createUser = async (email, password) => {
    if (!email || !password) return toast.error("Email & password required");
    setLoading(true);
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      toast.success("Account created!");
      return result;
    } catch (error) {
      toast.error(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Email/password sign in
  const signIn = async (email, password) => {
    if (!email || !password) return toast.error("Email & password required");
    setLoading(true);
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      toast.success("Logged in!");
      return result;
    } catch (error) {
      toast.error(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Google sign in
  const signInWithGoogle = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, googleProvider);
      toast.success("Logged in with Google!");
      return result;
    } catch (error) {
      toast.error(error.message);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Update profile
  const updateUser = (data) => auth.currentUser && updateProfile(auth.currentUser, data);

  // Log out
  const logOut = async () => {
    setLoading(true);
    try {
      await signOut(auth);
      toast.success("Logged out!");
    } catch (err) {
      toast.error("Logout failed");
    } finally {
      setLoading(false);
    }
  };

  // Track auth state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const authData = {
    user,
    loading,
    setUser,
    setLoading,
    createUser,
    signIn,
    logOut,
    updateUser,
    signInWithGoogle,
  };

  return <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
