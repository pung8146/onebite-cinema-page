import SearchableLayout from "@/components/searchable-layout";
import Head from "next/head";
import movie from "@/mock/movie.json";
import MovieItem from "@/components/movie-item";
export default function Home() {
  return (
    <>
      <Head>
        <title>ONEBITE CINEMA</title>
        <meta name="description" content="ONEBITE CINEMA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main">
        <section>
          <h3>지금 가장 추천하는 영화</h3>
          {movie.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </section>
        <section>
          <h3>등록된 모든 영화</h3>
          {movie.map((movie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
        </section>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <SearchableLayout>{page}</SearchableLayout>;
};
