import Layout from "@/components/Layout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Layout key={router.route}>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
