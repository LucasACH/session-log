import type { NextApiRequest, NextApiResponse } from "next";
import { serialize } from "cookie";

const session = (req: NextApiRequest, res: NextApiResponse) => {
  const httpMethod = req.method;

  const cookieOptions: {
    expires: Date;
    httpOnly: boolean;
    secure: boolean;
    sameSite: string;
    path: string;
  } = {
    expires: new Date(0), // Set date to 0 for instant expiration
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  };

  switch (httpMethod) {
    case "POST":
      // Create session cookie
      res.setHeader("Set-Cookie", serialize("session", "", cookieOptions));
      res.status(200).end();
      break;

    default:
      res.setHeader("Allow", ["POST"]);
      res.status(405).end(`Method ${httpMethod} Not Allowed`);
      break;
  }
};

export default session;
