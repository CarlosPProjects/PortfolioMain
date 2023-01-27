import React, { FC, ReactNode } from "react";
import Head from "next/head";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Carlos Portfolio</title>
        <meta name="description" content="My first Todo app" />
      </Head>

      <div className="w-full h-screen max-lg:p-8 max-sm:p-0 p-16">
        <div className="bg-gray-50 dark:bg-[#1d1d20] w-full h-full p-8 flex flex-col rounded-xl max-sm:rounded-none shadow-black shadow-lg">
          <Header />
          <div className="flex-grow flex items-center justify-center">
            {children}
          </div>
          <Footer />
        </div>
      </div>
      {/* <div className="w-full h-full flex bg-gray-50 dark:bg-[#1d1d20] rounded-xl max-w-6xl p-8">
        <Header />
        <motion.main
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="px-16 max-sm:p-0"
        >
          {children}
        </motion.main>
        <Footer />
      </div> */}
    </>
  );
};

export default Layout;
