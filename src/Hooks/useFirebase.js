import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseAuthInit from "../Component/Firebase/Firebase.init";
firebaseAuthInit();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});

    const [isLoading, setIsLoading] = useState(true);

    // User Login With Google
    const signinWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => setUser(result))
            .catch((err) => console.log(err))
            .finally(() => {
                window.location.reload();
            });

    };

    // User Logout
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch((error) => { alert(error.message) })
    };

    // User Observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, []);
    return {
        user,
        signinWithGoogle,
        logOut,
        isLoading
    };
};

export default useFirebase;