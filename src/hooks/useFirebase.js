import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuth from "../Firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
    const [user, setUser] = useState('')

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const signInGoogle = () =>{
        return signInWithPopup(auth, googleProvider);
        
    }

    const logOut = () =>{
        signOut(auth)
        .then(() => {
            setUser({})
          })
    } 

    useEffect(() => {
        const unsubscribe = onAuthStateChanged (auth, (user) => {
            if (user) {
              
              setUser(user);
              
            } 
          });
          return unsubscribe;
    }, [])

    return {
        user,
        signInGoogle,
        logOut
    }

}


export default useFirebase;