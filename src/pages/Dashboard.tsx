import { auth, provider } from "../config";
import { useState, useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { DashboardLayout } from "./Dashboard/DashboardLayout";

export function Dashboard() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      console.log(data);
      setUserEmail(data.user.email as string);
      setUserName(data.user.displayName as string);
      localStorage.setItem("email", data.user.email as string);
      localStorage.setItem("displayName", data.user.displayName as string);
    });
  };

  useEffect(() => {
    setUserEmail(localStorage.getItem("email") as string);
    setUserName(localStorage.getItem("displayName") as string);
  });

  return (
    <div>
      {userEmail ? (
        <DashboardLayout
          user={{ email: userEmail, displayName: userName }}
          onLogout={() => {
            alert('Logging out')
            localStorage.setItem("email", "");
          }}
        />
      ) : (
        <button onClick={() => handleSignIn()}>Signin with google</button>
      )}
    </div>
  );
}
