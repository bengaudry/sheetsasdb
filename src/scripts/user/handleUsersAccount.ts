import { getFirebaseApp } from "../firebase/firebaseInit";
import {
  getFirestore,
  collection,
  getDocs,
  setDoc,
  doc,
  query,
  where,
} from "firebase/firestore/lite";

const db = getFirestore(getFirebaseApp());

interface user {
  uid: string;
  displayName: string;
  email: string;
}

/**
 * Creates a user in the database
 * @param user {uid:string, displayName: string, email: string}
 */
export async function createUserInDb(user: user) {
  const usersRef = collection(db, "users");
  userExists(user.email).then((exists) => {
    // If the user doesn't exist, let's add it in the database
    if (!exists) {
      setDoc(doc(usersRef, user.uid), {
        displayName: user.displayName,
        email: user.email,
        createdAt: new Date(),
      });
    } else {
      console.warn("user exists");
    }
  });
}

/**
 * Checks if the user corresponding to a given email already exists in the database
 * @param email string
 * @returns boolean
 */
async function userExists(email: string) {
  const usersRef = collection(db, "users");
  // Fetch where the user match the provided email
  const q: any = query(usersRef, where("email", "==", email));
  const snapshot = await getDocs(q);
  if (snapshot.size > 0) {
    // User exists in the database
    return true;
  } else {
    // User doesn't exist in the database
    return false;
  }
}

/**
 * Returns all users in the database
 * @returns
 */
export async function getUsers() {
  var result: any[] = [];
  const usersCol = collection(db, "user");
  await getDocs(usersCol).then((data) =>
    data.docs.map((val) => {
      result.push(val.data());
    })
  );
  return result;
}
