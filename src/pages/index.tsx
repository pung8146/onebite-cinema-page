import SearchableLayout from "@/components/searchable-layout";
import Head from "next/head";
import movie from "@/mock/movie.json";
import MovieItem from "@/components/movie-item";
import styles from "./index.module.css";
import fetchMovie from "@/lib/fetch-movie";
import fetchRandomMovies from "@/lib/fetch-random-movies";
import { InferGetStaticPropsType } from "next";

export const getStaticProps = async () => {
  const [allMovies, recommendMovies] = await Promise.all([
    fetchMovie(),
    fetchRandomMovies(),
  ]);
  return {
    props: { allMovies, recommendMovies },
    revalidate: 3,
  };
};

export default function Home({
  allMovies,
  recommendMovies,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log(allMovies);

  return (
    <>
      <Head>
        <title>ONEBITE CINEMA</title>
        {/* 상대경로가 작동을안해서 수정 */}
        {/* <meta property="og:image" content="/thumbnail.png" /> */}
        <meta
          property="og:image"
          content="https://onebite-cinema-page.vercel.app/thumbnail.png"
        />
        <meta property="og:title" content="한입 CINEMA" />
        <meta
          property="og:description"
          content="ONEBITE CINEMA og description"
        />
        <meta name="description" content="ONEBITE CINEMA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.main}>
        <section>
          <h3>지금 가장 추천하는 영화</h3>
          <div className={styles.recommend}>
            {recommendMovies?.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
        <section>
          <h3>등록된 모든 영화</h3>
          <div className={styles.movie_list}>
            {movie.map((movie) => (
              <MovieItem key={movie.id} movie={movie} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <SearchableLayout>{page}</SearchableLayout>;
};
