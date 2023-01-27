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

      <div className="h-screen py-16">
        <div className="h-full flex flex-col p-8 bg-gray-50 dark:bg-[#1d1d20] rounded-xl shadow-black shadow-2xl">
          <Header />
          <motion.main
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className="flex flex-col flex-grow px-16 justify-center items-center"
          >
            {children}
          </motion.main>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Layout;
