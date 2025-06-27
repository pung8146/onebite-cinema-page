import SearchableLayout from "@/components/searchable-layout";
import MovieItem from "@/components/movie-item";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import type { MovieData } from "@/types";
import movieData from "@/mock/movie.json";

export default function Page() {
  const router = useRouter();
  const { q } = router.query;
  const [filteredMovies, setFilteredMovies] = useState<MovieData[]>([]);

  // 검색어에 따른 필터링
  useEffect(() => {
    if (!q || typeof q !== "string") {
      setFilteredMovies(movieData);
      return;
    }

    const searchTerm = q.toLowerCase().trim();
    const filtered = movieData.filter((movie) =>
      movie.title.toLowerCase().includes(searchTerm)
    );

    setFilteredMovies(filtered);
  }, [q]);

  return (
    <div>
      {filteredMovies.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3 , 1fr)",
            gap: "4px",
            padding: "20px 0",
          }}
        >
          {filteredMovies.map((movie) => (
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
