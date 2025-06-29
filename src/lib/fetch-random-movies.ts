import { MovieData } from "@/types";

export default async function fetchRandomMovies(): Promise<MovieData[] | null> {
  const url = `http://localhost:12345/movie/random`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch random movies");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching random movies:", error);
    return null;
  }
}
