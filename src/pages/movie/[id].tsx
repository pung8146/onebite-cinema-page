import style from "./[id].module.css";
import { GetStaticPropsContext, InferGetStaticPropsType } from "next";
import fetchOneMovie from "@/lib/fetch-one-movie";

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: false,
  };
};
export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params!.id;
  const movie = await fetchOneMovie(Number(id));
  return {
    props: { movie },
  };
};

export default function Page({
  movie,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  if (!movie) {
    return <div>영화를 찾을 수 없습니다.</div>;
  }
  console.log("id page", movie);
  return (
    <div className={style.container}>
      <div
        className={style.posterContainer}
        style={
          { "--bg-image": `url(${movie.posterImgUrl})` } as React.CSSProperties
        }
      >
        <img
          src={movie.posterImgUrl}
          alt={movie.title}
          className={style.poster}
        />
      </div>
      <p className={style.title}>{movie.title}</p>
      <div className={style.info}>
        <span>
          {movie.releaseDate} / {movie.genres.join(", ")} / {movie.runtime}분
        </span>
      </div>
      <div className={style.company}>{movie.company}</div>
      <p className={style.subtitle}>{movie.subTitle}</p>
      <p className={style.description}>{movie.description}</p>
    </div>
  );
}
