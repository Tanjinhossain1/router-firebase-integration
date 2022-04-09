import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase.init";


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const useFirebase = () => {
    const [user, setUser] = useState([]);
    const googleSingIn = () =>{
        signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          setUser(user)
        }).catch((error) => {
         console.log(error)
        });
    };
    const googleSingOut = () =>{
        signOut(auth).then(() => {
          })
    }
    // useEffect(()=>{
    //     onAuthStateChanged(auth, user=>{
    //         setUser(user);
            
    //     })
        
    // },[]);
 

    // return {
    //     user,
    //     googleSingIn,
    //     googleSingOut
    // }
       

}
export default useFirebase;