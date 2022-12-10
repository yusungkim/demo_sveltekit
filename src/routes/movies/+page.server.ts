import type { PageServerLoad } from './$types';
import { TMDB_API_KEY } from '$env/static/private'

export const load: PageServerLoad = async () => {
  console.log("Server side load...")

  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3//movie/popular?api_key=${TMDB_API_KEY}`
    );
    const data = await res.json();
    return data;
  };

  return fetchMovies()
};
