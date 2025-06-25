import { ReactNode } from "react";
import Link from "next/link";
import style from "./global-layout.module.css";

export default function GlobalLayout({ children }: { children: ReactNode }) {
  return (
    <div className={style.container}>
      <Link className="home" href="/" style={{ color: "rgb(222, 9, 20)" }}>
        ONEBITE CINEMA
      </Link>
      <main>{children}</main>
    </div>
  );
}
