import useSWR from "swr";
import { auth } from "firebase-admin";

const fetcher = async (url: string) => {
  const res: Response = await fetch(url);

  if (!res.ok) {
    throw Error("UNAUTHORIZED REQUEST!");
  }

  const data: {
    user: auth.DecodedIdToken;
  } = await res.json();

  return data.user;
};

const userUrl = process.env.NEXT_PUBLIC_USER_URL;

export const useGetUser = () => {
  const data = useSWR(userUrl, fetcher);
  return data;
};
