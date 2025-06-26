import type { MovieData } from "@/types.ts";
import Link from "next/link";
import style from "./movie-item.module.css";
export default function MovieItem({ movie }: { movie: MovieData }) {
  return (
    <Link href={`/movie/${movie.id}`} className={style.container}>
      <img src={movie.posterImgUrl} alt={movie.title} />
      <h4>{movie.title}</h4>
      <p>{movie.subTitle}</p>
    </Link>
  );
}
