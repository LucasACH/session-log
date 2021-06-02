import React, { useContext } from "react";
import Image from "next/image";
import { AuthContext } from "../contexts/auth";

const GoogleButton: React.FC = () => {
  const auth = useContext(AuthContext);

  return (
    <button
      type="button"
      onClick={() => auth.oAuthSignIn("google")}
      className="flex items-center justify-center space-x-2 bg-white border border-blueGray-300 dark:border-blueGray-700 rounded-md p-2 w-full hover:shadow-lg hover:bg-opacity-90 focus:outline-none"
    >
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/sailtrack-pwa-af986.appspot.com/o/logos%2Fgoogle-logo.png?alt=media&token=7fe36645-c446-4102-9bce-55aa5c2ba48b"
        width={20}
        height={20}
        alt="google"
        priority
      />
      <p className="text-md font-semibold">Continue with Google</p>
    </button>
  );
};

export default GoogleButton;
