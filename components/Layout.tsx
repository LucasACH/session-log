import React from "react";
import { useRouter } from "next/router";
import Header from "./Header";
import SideDrawer from "./SideDrawer";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  if (router.pathname === "/_error") {
    return <div>{children}</div>;
  }

  if (router.pathname === "/auth/sign-in") {
    return <div>{children}</div>;
  }

  return (
    <div className="h-screen flex flex-col">
      <Header />
      {children}
      <SideDrawer />
    </div>
  );
};

export default Layout;
