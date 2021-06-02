import cookie from "cookie";
import { GetServerSidePropsResult } from "next";

export const checkSessionCookie = (
  context
): GetServerSidePropsResult<{ [key: string]: any }> => {
  const cookies = cookie.parse(context.req.headers.cookie || "");
  const sessionCookie = cookies.session || "";

  if (sessionCookie === "") {
    context.res.writeHead(302, { Location: "/auth/sign-in" });
    context.res.end();
    return {
      props: { user: {} },
    };
  }

  return {
    props: { user: {} },
  };
};
