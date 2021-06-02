import React from "react";
import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { checkSessionCookie } from "../../helpers/checkSessionCookie";

const Account: NextPage = () => {
  return (
    <div className="p-7 flex flex-col">
      <Head>
        <title>Sailtrack | Account</title>
      </Head>
      <p className="font-semibold text-sm text-opacity-50 text-lightFont dark:text-darkFont dark:text-opacity-50">
        ACCOUNT
      </p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return checkSessionCookie(context);
};

export default Account;
