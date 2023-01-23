import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head />
      <body className="bg-gray-50 text-gray-900 dark:bg-[#1d2327] dark:text-gray-50">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
