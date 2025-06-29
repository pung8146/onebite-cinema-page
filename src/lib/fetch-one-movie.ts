import { MovieData } from "@/types";

export default async function fetchOneMovie(
  id: number
): Promise<MovieData | null> {
  const url = `http://localhost:12345/movie/${id}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch movie");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie:", error);
    return null;
  }
}
