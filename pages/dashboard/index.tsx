import React from "react";
import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { checkSessionCookie } from "../../helpers/checkSessionCookie";
import { useGetUser } from "../../helpers/useRequest";
import SessionTable from "../../components/SessionTable";

const Overview: NextPage = () => {
  const { data } = useGetUser();

  const handleWelcome = () => {
    const time = new Date().getHours();

    if (data) {
      let name = data.name === undefined ? "" : `, ${data.name.split(" ")[0]}`;

      if (time < 12) {
        return `Good Morning${name} 👋`;
      } else if (time < 18) {
        return `Good Afternoon${name} 👋`;
      } else {
        return `Good Evening${name} 👋`;
      }
    }
    return "";
  };

  return (
    <div className="p-7 flex flex-col flex-auto">
      <Head>
        <title>Sailtrack | Dashboard</title>
      </Head>
      <p className="font-semibold text-sm text-opacity-50 text-lightFont dark:text-darkFont dark:text-opacity-50">
        OVERVIEW
      </p>
      <p className="text-xl my-3 mb-6 md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">
        {handleWelcome()}
      </p>
      <SessionTable />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  return checkSessionCookie(context);
};

export default Overview;
