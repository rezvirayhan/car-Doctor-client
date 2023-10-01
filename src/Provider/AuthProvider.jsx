import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loding, setLoding] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSign = () => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        setLoding(true)
        return signOut(auth)
    }




    useEffect(() => {
        const unSubScrib = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoding(false)
            if (currentUser && currentUser.email) {
                const logedUser = {
                    email: currentUser.email
                }
                fetch('http://localhost:5000/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(logedUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log('JWT WTF RESPONSE', data);
                        localStorage.setItem('Car-Doctor-Token', data.token)

                    })
            }
            else {
                localStorage.removeItem('Car-Doctor-Token')
            }
        })
        return () => {
            return unSubScrib()
        }
    }, [])

    const authInfo = {
        user,
        loding,
        createUser,
        signIn,
        googleSign,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;