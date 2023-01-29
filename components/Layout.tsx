import React, { FC, ReactNode } from "react";
import Head from "next/head";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Carlos Garavito</title>
        <meta name="description" content="My first portfolio prototype" />
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />
      </Head>

      <div className="w-full h-full max-lg:p-8 max-sm:p-0 p-16 flex justify-center items-center">
        <div className="bg-gray-50 dark:bg-[#1d1d20] w-full h-full p-8 flex flex-col rounded-xl max-sm:rounded-none max-sm:shadow-none shadow-black shadow-lg">
          <Header />
          <div className="flex-grow flex items-center justify-center px-8 max-md:py-8 py-20 max-sm:py-8 max-sm:px-0">
            {children}
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
