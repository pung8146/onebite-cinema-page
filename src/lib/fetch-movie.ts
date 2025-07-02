import { MovieData } from "@/types";

export default async function fetchMovie(
  q?: string
): Promise<MovieData[] | null> {
  let url = `https://onebite-cinema-api-main-ecru.vercel.app/movie`;

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch movie");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching movie:", error);
    return [];
  }
}
