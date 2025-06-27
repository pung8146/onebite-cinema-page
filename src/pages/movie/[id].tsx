import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { MovieData } from "@/types";
import movieData from "@/mock/movie.json";
import style from "./[id].module.css";

export default function Page() {
  const router = useRouter();
  const { id } = router.query;
  const [movie, setMovie] = useState<MovieData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundMovie = movieData.find((m) => m.id === Number(id));
      setMovie(foundMovie || null);
      setLoading(false);
    }
  }, [id]);

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (!movie) {
    return <div>영화를 찾을 수 없습니다.</div>;
  }

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
