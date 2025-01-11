import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const googleProvider = new GoogleAuthProvider();

export const googleLogin = async () => {
  try {
    const authResult = await signInWithPopup(auth, googleProvider);
    const userDocRef = doc(db, "users", authResult.user.uid);
    const userDocSnapshot = await getDoc(userDocRef);
    // Add the user to the database if they don't exist
    if (!userDocSnapshot.exists()) {
      console.log("Adding a new user to the database.");
      const userData = {
        uid: authResult.user.uid,
        name: authResult.user.displayName,
        email: authResult.user.email,
      };
      await setDoc(userDocRef, userData);
    }
    // else return user
    return authResult.user;
  } catch (err) {
    console.error("Error during Google sign-in:", err);
    return null;
    // Return null in error
  }
};
