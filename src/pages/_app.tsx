import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: NextPageWithLayout }) {
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);

  return (
    <>
      <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
    </>
  );
}
