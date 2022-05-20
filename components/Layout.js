import React from "react";
import Head from "next/head";
// import Image from "next/image";
import HeaderNav from "../components/HeaderNav";
import { useRouter } from "next/router";
import SideNav from "../components/SideNav";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const routerPathname = useRouter().pathname;
  return (
    <>
      <Head>
        <title>My Amazon version</title>
        <meta name="description" content="Developed by Sahine Diallo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-transparent position-relative">
        <div className="main__container">
          {routerPathname !== "/signin" && (
            <>
              <HeaderNav />
              <SideNav />
            </>
          )}
          {children}
        </div>
        {routerPathname !== "/signin" && <Footer />}
      </main>
    </>
  );
};

export default Layout;
