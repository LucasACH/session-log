import type { NextApiRequest, NextApiResponse } from "next";
import initFirebaseAdmin from "../../../firebase/firebaseAdminInit";
import firebase from "firebase/app";
import { serialize } from "cookie";

const session = async (req: NextApiRequest, res: NextApiResponse) => {
  // Initialize firebase admin
  const admin = initFirebaseAdmin();

  const auth = admin.auth();
  const firestore = admin.firestore();

  const httpMethod = req.method;
  const reqBody: { user: firebase.auth.UserCredential; idToken: string } =
    req.body;

  // Set session expiration to 365 days.
  const days = 365;
  const expiresIn = 86400 * days;

  const cookieOptions: {
    maxAge: number;
    httpOnly: boolean;
    secure: boolean;
    sameSite: string;
    path: string;
  } = {
    maxAge: expiresIn,
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  };

  switch (httpMethod) {
    case "POST":
      const user = reqBody.user;
      const idToken: string = reqBody.idToken;

      // Verify IdToken and check if the user just signed in in the last 5 minutes.
      try {
        return admin
          .auth()
          .verifyIdToken(idToken)
          .then((decodedClaims) => {
            if (
              new Date().getTime() / 1000 - decodedClaims.auth_time <
              5 * 60
            ) {
              //Create user document on database
              if (user.additionalUserInfo.isNewUser) {
                firestore.collection("users").doc(user.user.uid).set({
                  email: user.user.email,
                  dateCreated: new Date(),
                });
              }

              // Create session cookie (HttpOnly and SameSite strict)
              return auth
                .createSessionCookie(idToken, { expiresIn })
                .then((sessionCookie) => {
                  // Set session cookie
                  res.setHeader(
                    "Set-Cookie",
                    serialize("session", sessionCookie, cookieOptions)
                  );
                  res.status(200).end();
                });
            }
            res.status(401).send("UNAUTHORIZED REQUEST!");
          });
      } catch (_) {
        res.status(401).send("UNAUTHORIZED REQUEST!");
      }
      break;

    default:
      // Only allowed POST requests
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${httpMethod} Not Allowed`);
      break;
  }
};

export default session;
