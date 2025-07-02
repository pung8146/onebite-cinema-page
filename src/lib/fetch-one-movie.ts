import { MovieData } from "@/types";

export default async function fetchOneMovie(
  id: number
): Promise<MovieData | null> {
  const url = `https://onebite-cinema-api-main-ecru.vercel.app/movie/${id}`;

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
