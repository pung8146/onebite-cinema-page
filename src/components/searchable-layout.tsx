import { ReactNode, useState } from "react";
import style from "./searchable-layout.module.css";
import { useRouter } from "next/router";
export default function SearchableLayout({
  children,
}: {
  children: ReactNode;
}) {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSearch = () => {
    router.push(`/search?q=${search}`);
  };
  return (
    <div>
      <div className={style.searchContainer}>
        <input
          type="text"
          placeholder="검색어를 입력해주세요 ..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={handleSearch}>검색</button>
      </div>
      {children}
    </div>
  );
}
