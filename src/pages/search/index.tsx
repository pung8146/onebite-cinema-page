import SearchableLayout from "@/components/searchable-layout";
import MovieItem from "@/components/movie-item";

import fetchMovie from "@/lib/fetch-movie";
import { GetServerSidePropsContext } from "next";
import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { q } = context.query;
  const movies = await fetchMovie(q as string);
  return {
    props: { movies, q },
  };
};

export default function Page({
  movies,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  console.log(movies);
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
