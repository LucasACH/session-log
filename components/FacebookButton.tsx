import React, { useContext } from "react";
import Image from "next/image";
import { AuthContext } from "../contexts/auth";

const FacebookButton: React.FC = () => {
  const auth = useContext(AuthContext);

  return (
    <button
      type="button"
      onClick={() => auth.oAuthSignIn("facebook")}
      className="flex items-center justify-center space-x-2 bg-white border border-blueGray-300 dark:border-blueGray-700 rounded-md p-2 w-full bg-facebook text-blueGray-50 hover:shadow-lg hover:bg-opacity-90 focus:outline-none"
    >
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/sailtrack-pwa-af986.appspot.com/o/logos%2Ffacebook-logo.png?alt=media&token=b9cac0d6-996c-4441-bfb1-d073f2932ce8"
        width={20}
        height={20}
        alt="facebook"
        priority
      />
      <p className="text-md font-semibold">Continue with Facebook</p>
    </button>
  );
};

export default FacebookButton;
