import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/Firebase.config";
 export const AuthContext =createContext(null);

const AuthProvider = ({children}) => {
    const [user,setuser] = useState(null);
    
    const [loading, setloading] = useState(true);
    
const googleProvider = new GoogleAuthProvider();






    const createuser =(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password);
       
    }

    const signin =(email,password)=>{
        setloading(true);
        return signInWithEmailAndPassword(auth,email,password)
       
    }
    
    const logout = () => {
        setloading(true);
        return signOut(auth);
    }

    const signinwithgoogle = () =>{
        setloading(true);
        return signInWithPopup(auth, googleProvider);
    }

     // update user profile
     const updateuserprofile = (name, image,email) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: image,
            email: email,
          })
          
    }

   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('user in the auth state changed', currentUser);
         setuser(currentUser);
         setloading(false);
        
       
    });
    return () => {
        unSubscribe();
    }
      
    
   
   },[])
   
  
    const Authinfo = {
        
        createuser,
         user,
        
        loading,
        signin,
         logout,
         signinwithgoogle,
         updateuserprofile
    }
    return (
        <AuthContext.Provider value={Authinfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;