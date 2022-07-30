import { auth, db } from "../firebase-app/firebase-config";
import {
  collection,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const value = { user, setUser };

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        const docRef = query(
          collection(db, "users"),
          where("email", "==", user.email)
        );
        onSnapshot(docRef, (snapshot) => {
          snapshot.forEach((doc) => {
            setUser({
              ...user,
              ...doc.data(),
            });
          });
        });
      } else {
        setUser({});
      }
    });
  });

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
