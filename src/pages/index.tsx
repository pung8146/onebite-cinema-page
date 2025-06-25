import SearchableLayout from "@/components/searchable-layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>ONEBITE CINEMA</title>
        <meta name="description" content="ONEBITE CINEMA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main"></div>
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <SearchableLayout>{page}</SearchableLayout>;
};
