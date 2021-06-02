import React, { useContext, useState } from "react";
import Head from "next/head";
import { NextPage } from "next";
import { AuthContext } from "../../contexts/auth";
import Link from "next/link";
import Logo from "../../public/sailtrack-isologo.svg";
import TextInput from "../../components/shared/TextInput";
import GoogleButton from "../../components/GoogleButton";
import FacebookButton from "../../components/FacebookButton";
import { LockClosedIcon } from "@heroicons/react/solid";

const SignIn: NextPage = () => {
  const auth = useContext(AuthContext);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleKeypress = (event) => {
    event.preventDefault();
    if (event.code === "Enter") {
      auth.signIn(email, password);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <Logo className="mx-auto h-36 w-auto fill-current text-lightFont dark:text-accent" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleKeypress}>
          <input type="hidden" name="remember" defaultValue="true" />

          <div className="rounded-md shadow-sm -space-y-px">
            <TextInput
              label="Email"
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              onChange={(event) => setEmail(event.target.value)}
              required
              placeholder="Email address"
              borderRadius="rounded-none rounded-t-md"
            />

            <TextInput
              label="Password"
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
              required
              placeholder="Password"
              borderRadius="rounded-none rounded-b-md"
            />
          </div>

          <div className="flex items-center">
            <div className="h-px border-b border-blueGray-200 dark:border-blueGray-700 w-full"></div>
            <p className="mx-2 text-sm text-blueGray-400 dark:text-blueGray-600">
              OR
            </p>
            <div className="h-px border-b border-blueGray-200 dark:border-blueGray-700 w-full"></div>
          </div>

          <div className="space-y-2">
            <GoogleButton />
            <FacebookButton />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                name="remember_me"
                type="checkbox"
                className="h-4 w-4 text-accent border-blueGray-800 dark:border-blueGray-700 rounded ring-0 focus:ring-accent"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link href="/auth/forgot-password">
                <a className="font-medium text-blueGray-800 dark:text-accent hover:text-opacity-50 dark:text-teal-400 dark:hover:text-opacity-50">
                  Forgot your password?
                </a>
              </Link>
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={email === "" || password === ""}
              onClick={() => auth.signIn(email, password)}
              className="w-full disabled:cursor-not-allowed dark:disabled:hover:bg-opacity-50 dark:disabled:bg-opacity-50 bg-blueGray-300 active:bg-blueGray-300 dark:text-lightFont border border-blueGray-400 dark:border-blueGray-700 dark:bg-accent dark:active:bg-accent hover:bg-opacity-80 hover:shadow-md dark:hover:bg-opacity-80 flex items-center justify-center space-x-2 px-4 py-2 rounded-md text-sm font-medium shadow-sm focus:outline-none"
            >
              {(email === "" || password === "") && (
                <LockClosedIcon className="h-4" />
              )}

              <p className="font-semibold">Sign In</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
