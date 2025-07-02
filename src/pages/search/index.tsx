import SearchableLayout from "@/components/searchable-layout";
import MovieItem from "@/components/movie-item";

import fetchMovie from "@/lib/fetch-movie";
// import { GetStaticPropsContext } from "next";
// import { InferGetStaticPropsType } from "next";
import { MovieData } from "@/types";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const { q } = context.query;
//   const movies = await fetchMovie(q as string);
//   return {
//     props: { movies, q },
//   };
// };

export default function Page() {
  const [movies, setMovies] = useState<MovieData[]>([]);
  const router = useRouter();
  const q = router.query.q;

  const fetchSearchResult = async () => {
    const data = await fetchMovie(q as string);
    setMovies(data || []);
  };

  useEffect(() => {
    if (q) {
      fetchSearchResult();
    }
  }, [q]);

  return (
    <div>
      {movies && movies.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3 , 1fr)",
            gap: "4px",
            padding: "20px 0",
          }}
        >
          {movies?.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <p style={{ textAlign: "center", padding: "40px" }}>
          검색 결과가 없습니다.
        </p>
      )}
    </div>
  );
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <SearchableLayout>{page}</SearchableLayout>;
};
