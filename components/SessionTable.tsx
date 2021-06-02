import React from "react";
import { classNames } from "../helpers/classNames";
import Pagination from "./shared/Pagination";

export const SessionTable: React.FC = () => {
  const tableHead = [
    {
      name: "Id",
    },
    {
      name: "Date",
    },
    {
      name: "Sport",
    },
    {
      name: "Start",
    },
    {
      name: "End",
    },
    {
      name: "Duration (hr)",
    },
    {
      name: "Direction",
    },
    {
      name: "Wind (kn)",
    },
    {
      name: "Gust (kn)",
    },
  ];

  const sessions = [
    {
      id: "j3dqa6ce7",
      date: "28 May, 2021",
      sport: "Kite",
      start: "10:35",
      end: "12:54",
      duration: "02:19",
      direction: "SE",
      wind: "13",
      gust: "17",
    },
    {
      id: "j3dqa6ce7",
      date: "28 May, 2021",
      sport: "Kite",
      start: "10:35",
      end: "12:54",
      duration: "02:19",
      direction: "SE",
      wind: "13",
      gust: "17",
    },
    {
      id: "j3dqa6ce7",
      date: "28 May, 2021",
      sport: "Kite",
      start: "10:35",
      end: "12:54",
      duration: "02:19",
      direction: "SE",
      wind: "13",
      gust: "17",
    },
    {
      id: "j3dqa6ce7",
      date: "28 May, 2021",
      sport: "Kite",
      start: "10:35",
      end: "12:54",
      duration: "02:19",
      direction: "SE",
      wind: "13",
      gust: "17",
    },
  ];

  return (
    <div className="flex flex-auto flex-col bg-blueGray-300 dark:bg-blueGray-700 rounded-md">
      <table className="table-auto flex-auto bg-blueGray-300 dark:bg-blueGray-700 rounded-t-md min-w-full divide-y divide-blueGray-200 dark:divide-blueGray-600">
        <thead>
          <tr>
            {tableHead.map((head, index) => (
              <th
                key={index}
                scope="col"
                className={classNames(
                  index === 1 &&
                    "hidden sm:table-cell md:table-cell xl:table-cell 2xl:table-cell",
                  (index === 3 || index === 4 || index === 5) &&
                    "hidden sm:hidden md:hidden xl:table-cell 2xl:table-cell",
                  index === 6 &&
                    "hidden sm:hidden md:table-cell xl:table-cell 2xl:table-cell",
                  (index === 7 || index === 8) &&
                    "hidden sm:table-cell md:table-cell xl:table-cell 2xl:table-cell",
                  "px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
                )}
              >
                {head.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sessions.map((session, index) => (
            <tr
              key={index}
              className="cursor-pointer border-b border-blueGray-200 dark:border-blueGray-600"
            >
              <td className="text-sm px-6 py-4 whitespace-nowrap">
                {session.id}
              </td>
              <td className="text-sm px-6 py-4 whitespace-nowrap hidden sm:table-cell md:table-cell xl:table-cell 2xl:table-cell">
                {session.date}
              </td>
              <td className="text-sm px-6 py-4 whitespace-nowrap">
                {session.sport}
              </td>
              <td className="text-sm px-6 py-4 whitespace-nowrap hidden sm:hidden md:hidden xl:table-cell 2xl:table-cell">
                {session.start}
              </td>
              <td className="text-sm px-6 py-4 whitespace-nowrap hidden sm:hidden md:hidden xl:table-cell 2xl:table-cell">
                {session.end}
              </td>
              <td className="text-sm px-6 py-4 whitespace-nowrap hidden sm:hidden md:hidden xl:table-cell 2xl:table-cell">
                {session.duration}
              </td>
              <td className="text-sm px-6 py-4 whitespace-nowrap hidden sm:hidden md:table-cell xl:table-cell 2xl:table-cell">
                {session.direction}
              </td>
              <td className="text-sm px-6 py-4 whitespace-nowrap hidden sm:table-cell md:table-cell xl:table-cell 2xl:table-cell">
                {session.wind}
              </td>
              <td className="text-sm px-6 py-4 whitespace-nowrap hidden sm:table-cell md:table-cell xl:table-cell 2xl:table-cell">
                {session.gust}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </div>
  );
};

export default SessionTable;
