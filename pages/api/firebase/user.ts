import { NextApiRequest, NextApiResponse } from "next";
import initFirebaseAdmin from "../../../firebase/firebaseAdminInit";

const session = async (req: NextApiRequest, res: NextApiResponse) => {
  // Initialize firebase admin
  const admin = initFirebaseAdmin();

  const auth = admin.auth();

  const httpMethod = req.method;
  const sessionCookie = req.cookies.session;

  switch (httpMethod) {
    case "GET":
      try {
        return auth
          .verifySessionCookie(sessionCookie, true)
          .then((decodedClaims) => {
            res.json({ user: decodedClaims });
            res.status(200).end();
          });
      } catch (_) {
        res.status(401).end("UNAUTHORIZED REQUEST!");
      }
      break;

    default:
      // Only allowed GET requests
      res.setHeader("Allow", ["GET"]);
      res.status(405).end(`Method ${httpMethod} Not Allowed`);
      break;
  }
};

export default session;
