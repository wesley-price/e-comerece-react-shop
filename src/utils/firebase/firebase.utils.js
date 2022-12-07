// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'
// Your web app's Firebase configuration
const firebaseConfig = {

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapShot = await getDoc(userDocRef);
    console.log(userDocRef);
    console.log(userSnapShot.exists());

    if(!userSnapShot.exists()) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();
        try
        {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            });
        }catch (error){
            console.log('Error creating the User : ', error.message)
        }
        return userDocRef;
    }
    //if user data exists
    //return userDocRef
    //if user data does not exists
    // create / set the document with the data from userAuth in my collection

}
