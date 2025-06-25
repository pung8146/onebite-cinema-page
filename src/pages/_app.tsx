import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Link from "next/link";
// import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  // const router = useRouter();

  // const onClickButtonHome = () => {
  //   router.push("/");
  // };

  return (
    <>
      <header>
        {/* <button onClick={onClickButtonHome}>ONEBITE CINEMA</button> */}
        <Link href="/">ONEBITE CINEMA</Link>
      </header>
      <Component {...pageProps} />;
    </>
  );
}
