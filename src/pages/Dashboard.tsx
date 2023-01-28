import { auth, provider } from "../config";
import { useState, useEffect } from "react";
import { signInWithPopup } from "firebase/auth";
import { DashboardLayout } from "./Dashboard/DashboardLayout";
import Footer from "../components/Footer/Footer";
import { createUserInDb } from "../scripts/user/handleUsersAccount";

export function Dashboard() {
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const handleSignIn = () => {
    signInWithPopup(auth, provider).then((data) => {
      // Add the user in the React State
      setUserEmail(data.user.email as string);
      setUserName(data.user.displayName as string);
      setUserId(data.user.uid as string);
      // Add the user in the local storage
      localStorage.setItem("email", data.user.email as string);
      localStorage.setItem("displayName", data.user.displayName as string);
      localStorage.setItem("uid", data.user.uid as string);
      // Add the user in db
      createUserInDb({
        displayName: data.user.displayName as string,
        uid: data.user.uid as string,
        email: data.user.email as string,
      });
    });
  };

  useEffect(() => {
    setUserEmail(localStorage.getItem("email") as string);
    setUserName(localStorage.getItem("displayName") as string);
    setUserId(localStorage.getItem("uid") as string);
  });

  return (
    <div>
      {userEmail !== null ? (
        <div>
          <DashboardLayout
            user={{ email: userEmail, displayName: userName }}
            onLogout={() => {
              localStorage.clear();
              location.reload();
            }}
          />
        </div>
      ) : (
        <div className="w-full">
          <div className="flex items-center flex-col gap-8 py-32">
            <p className="text-3xl font-semibold text-center max-w-lg">
              Please sign in to your google account to access your dashboard
            </p>
            <button
              onClick={() => handleSignIn()}
              className=" flex flex-row items-center transition-colors duration-300 bg-blue-600 hover:bg-blue-800 pl-1 pr-4 py-1 rounded-lg font-semibold gap-3 w-max"
            >
              <div className="rounded-lg overflow-hidden w-fit h-fit bg-white scale-75">
                <img
                  src="/res/googleLogo.svg"
                  alt="Google logo"
                  className="rounded-lg overflow-hidden w-full h-full scale-125 -translate-x-0.5 -translate-y-0.5"
                />
              </div>
              Sign In with google
            </button>
          </div>

          <Footer />
        </div>
      )}
    </div>
  );
}
