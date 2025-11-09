;import React, { createContext, useEffect, useState } from 'react';
import app from '../services/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
 
export const AuthContext =createContext();


const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);

console.log(user)

const createUser = (email, password) => {

return createUserWithEmailAndPassword(auth,email,password);

};

const signIn= (email,password) =>{
return signInWithEmailAndPassword(auth,email,password);
}

const updateUser=(updateData)=>{
    return updateProfile(auth.currentUser ,updateData);
}

const logOut=()=>{
    return signOut(auth)
}

useEffect(()=>{
const unsubscribe= onAuthStateChanged(auth,(currentUser)=>{

    setUser(currentUser);

});
return ()=>{
unsubscribe();
}
},[])

const authData={
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    updateUser,
}

    return <AuthContext value={authData}>
     {children}
    </AuthContext>;
};

export default AuthProvider;