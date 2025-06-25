import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";

export default function Page() {
  const router = useRouter();

  const { q } = router.query;

  console.log(router);
  return <h1>검색결과 : {q}</h1>;
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <SearchableLayout>{page}</SearchableLayout>;
};
