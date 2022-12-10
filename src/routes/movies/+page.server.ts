import { TMDB_API_KEY } from '$env/static/private'

export const load = async () => {
  const fetchMovies = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3//movie/popular?api_key=${TMDB_API_KEY}`
    );
    const data = await res.json();
    return data;
  };

  return {
    movies: fetchMovies(),
  };
};
