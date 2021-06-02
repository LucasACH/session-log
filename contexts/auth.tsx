import React, { createContext, useContext } from "react";
import initFirebase from "../firebase/firebaseInit";
import firebase from "firebase/app";
import { useRouter } from "next/router";
import { SnackbarContext } from "./snackbar";

interface AuthContext {
  signIn?: (email: string, password: string) => Promise<void>;
  signOut?: () => Promise<boolean | void>;
  oAuthSignIn?: (provider: string) => void;
}

export const AuthContext = createContext<AuthContext>(null);

const AuthProvider: React.FC = ({ children }) => {
  initFirebase();

  const router = useRouter();
  const snackbar = useContext(SnackbarContext);

  // Sign in API endpoint url
  const signInUrl = process.env.NEXT_PUBLIC_SIGN_IN_URL;
  const signOutUrl = process.env.NEXT_PUBLIC_SIGN_OUT_URL;

  // As httpOnly cookies are to be used, do not persist any state client side.
  firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

  var googleProvider = new firebase.auth.GoogleAuthProvider();
  var facebookProvider = new firebase.auth.FacebookAuthProvider();

  const auth = firebase.auth();

  const postUserToken = async (
    user: firebase.auth.UserCredential,
    idToken: string,
    url: string
  ) => {
    var data: object = { user: user, idToken: idToken };

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data), // body data type must match "Content-Type" header
      }).then(function (response) {
        return response; // parses JSON response into native JavaScript objects
      });
    } catch (error) {
      snackbar.showSnackbar({
        title: "Authentication Error",
        message: error,
        error: true,
      });
    }
  };

  const signIn = (email: string, password: string) => {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        return user.user.getIdToken().then(async (idToken) => {
          // Make API call to set session cookie
          return await postUserToken(user, idToken, signInUrl);
        });
      })
      .then(() => {
        // A page redirect would suffice as the persistence is set to NONE.
        return firebase.auth().signOut();
      })
      .then(() => {
        router.push("/dashboard");
      })
      .catch((error) => {
        var code: string = error.code;
        var message: string = error.message;

        switch (code) {
          case "auth/invalid-email":
            snackbar.showSnackbar({
              title: "Invalid Email",
              message: message,
              error: true,
            });
            break;

          case "auth/user-disabled":
            snackbar.showSnackbar({
              title: "User Disabled",
              message: message,
              error: true,
            });
            break;
          case "auth/user-not-found":
            snackbar.showSnackbar({
              title: "User Not Found",
              message: message,
              error: true,
            });
            break;
          case "auth/wrong-password":
            snackbar.showSnackbar({
              title: "Wrong Password",
              message: message,
              error: true,
            });
            break;
          case "auth/too-many-requests":
            snackbar.showSnackbar({
              title: "Too Many Requests",
              message: message,
              error: true,
            });
            break;

          default:
            snackbar.showSnackbar({
              title: "Connection Error",
              message: "Check your internet connection and try again",
              error: true,
            });
            break;
        }
      });
  };

  const signOut = () => {
    return postUserToken(null, "", signOutUrl)
      .then(() => router.push("/auth/sign-in"))
      .catch((error) => {
        console.log(error);
      });
  };

  const oAuthSignIn = (provider: string = "google" || "facebook") => {
    return auth
      .signInWithPopup(
        provider === "google" ? googleProvider : facebookProvider
      )
      .then((user) => {
        return user.user.getIdToken().then(async (idToken) => {
          // Make API call to set session cookie
          return await postUserToken(user, idToken, signInUrl);
        });
      })
      .then(() => {
        // A page redirect would suffice as the persistence is set to NONE.
        return firebase.auth().signOut();
      })
      .then(() => {
        router.push("/dashboard");
      })
      .catch((error) => {
        var code = error.code;
        var message = error.message;

        switch (code) {
          case "auth/account-exists-with-different-credential":
            snackbar.showSnackbar({
              title: "Account Exists With Different Credential",
              message: message,
              error: true,
            });
            break;

          case "auth/auth-domain-config-required":
            snackbar.showSnackbar({
              title: "Auth Domain Config Required",
              message: message,
              error: true,
            });
            break;

          case "auth/cancelled-popup-request":
            snackbar.showSnackbar({
              title: "Cancelled Popup Request",
              message: message,
              error: true,
            });
            break;

          case "auth/operation-not-allowed":
            snackbar.showSnackbar({
              title: "Operation Not Allowed",
              message: message,
              error: true,
            });
            break;

          case "auth/operation-not-supported-in-this-environment":
            snackbar.showSnackbar({
              title: "Operation Not Supported In This Environment",
              message: message,
              error: true,
            });
            break;

          case "auth/popup-blocked":
            snackbar.showSnackbar({
              title: "Popup Blocked",
              message: message,
              error: true,
            });
            break;

          case "auth/popup-closed-by-user":
            snackbar.showSnackbar({
              title: "Popup Closed By User",
              message: message,
              error: true,
            });
            break;

          case "auth/unauthorized-domain":
            snackbar.showSnackbar({
              title: "Unauthorized Domain",
              message: message,
              error: true,
            });
            break;

          default:
            snackbar.showSnackbar({
              title: "Connection Error",
              message: "Check your internet connection and try again",
              error: true,
            });
            break;
        }
      });
  };

  return (
    <AuthContext.Provider value={{ signIn, signOut, oAuthSignIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
