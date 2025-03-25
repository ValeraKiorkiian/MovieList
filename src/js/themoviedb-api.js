import axios from 'axios';
const API_KEY = '5492cdd75627c83efb1990fb79e6e1c0';
// https://api.themoviedb.org/3/movie/upcoming?api_key=ТВІЙ_API_КЛЮЧ

export async function getUpcomingMovies() {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
  );

  return data;
}

export async function getFeaturedMovies() {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
  );

  return data;
}

export async function getUserMovies(movieName, page = 1) {
  const { data } = await axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}`,
    {
      params: {
        query: movieName,
        page,
      },
    }
  );
  console.log(data);

  return data;
}
// https://api.themoviedb.org/3/movie/now_playing

export async function getNewArrivalMovies() {
  const { data } = await axios(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`
  );
  return data;
}

// `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`;
export async function getMoviesId() {
  const { results } = await getFeaturedMovies();
  results.forEach(res => {
    console.log(res.id);
  });
}
getMoviesId();

export async function getVideosById() {}
