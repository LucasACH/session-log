import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const Pagination: React.FC = () => {
  return (
    <div className="px-4 py-3 flex items-center justify-between sm:px-6 bg-blueGray-300 dark:bg-blueGray-700 border-t border-blueGray-200 dark:border-blueGray-600 rounded-b-md">
      <div className="flex-1 flex justify-between sm:hidden">
        <a className="relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border border-blueGray-200 dark:border-blueGray-600 cursor-pointer hover:bg-blueGray-200 dark:hover:bg-blueGray-600">
          Previous
        </a>
        <a className="ml-3 relative inline-flex items-center px-4 py-2 text-sm font-medium rounded-md border border-blueGray-200 dark:border-blueGray-600 cursor-pointer hover:bg-blueGray-200 dark:hover:bg-blueGray-600">
          Next
        </a>
      </div>
      <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
        <div>
          <p className="text-sm">
            Showing <span className="font-semibold">1</span> to{" "}
            <span className="font-semibold">10</span> of{" "}
            <span className="font-semibold">97</span> results
          </p>
        </div>
        <div>
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <a className="relative inline-flex items-center px-2 py-2 rounded-l-md text-sm font-medium border border-blueGray-200 dark:border-blueGray-600 cursor-pointer hover:bg-blueGray-200 dark:hover:bg-blueGray-600">
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              aria-current="page"
              className="z-10 relative inline-flex items-center px-4 py-2 text-sm font-medium border border-blueGray-200 dark:border-blueGray-600 cursor-pointer hover:bg-blueGray-200 dark:hover:bg-blueGray-600"
            >
              1
            </a>
            <a className="relative inline-flex items-center px-4 py-2 text-sm font-medium border border-blueGray-200 dark:border-blueGray-600 cursor-pointer hover:bg-blueGray-200 dark:hover:bg-blueGray-600">
              2
            </a>
            <a className="hidden md:inline-flex relative items-center px-4 py-2 text-sm font-medium border border-blueGray-200 dark:border-blueGray-600 cursor-pointer hover:bg-blueGray-200 dark:hover:bg-blueGray-600">
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium border border-blueGray-200 dark:border-blueGray-600 cursor-pointer hover:bg-blueGray-200 dark:hover:bg-blueGray-600">
              ...
            </span>
            <a className="hidden md:inline-flex relative items-center px-4 py-2 text-sm font-medium border border-blueGray-200 dark:border-blueGray-600 cursor-pointer hover:bg-blueGray-200 dark:hover:bg-blueGray-600">
              8
            </a>
            <a className="relative inline-flex items-center px-4 py-2 text-sm font-medium border border-blueGray-200 dark:border-blueGray-600 cursor-pointer hover:bg-blueGray-200 dark:hover:bg-blueGray-600">
              9
            </a>
            <a className="relative inline-flex items-center px-4 py-2 text-sm font-medium border border-blueGray-200 dark:border-blueGray-600 cursor-pointer hover:bg-blueGray-200 dark:hover:bg-blueGray-600">
              10
            </a>
            <a className="relative inline-flex items-center px-2 py-2 rounded-r-md text-sm font-medium border border-blueGray-200 dark:border-blueGray-600 cursor-pointer hover:bg-blueGray-200 dark:hover:bg-blueGray-600">
              <span className="sr-only ">Next</span>
              <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
