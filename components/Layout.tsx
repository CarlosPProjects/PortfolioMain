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
        <title>My Todo App</title>
        <meta name="description" content="My first Todo app" />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children} </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
