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
export async function getVideosById() {
  const { results } = await getFeaturedMovies();
  const resultIds = results.map(res => res.id);
  // console.log(...resultIds);
  const videoRequests = resultIds.map(id =>
    axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    )
  );

  const videos = await Promise.all(videoRequests);
  // console.log(videos);

  const trailers = videos.reduce((acc, video) => {
    const trailer = video.data.results.find(vid => vid.type === 'Trailer');
    if (trailer) {
      acc.push(trailer);
    }
    return acc;
  }, []);
  // console.log(trailers);
  return trailers.slice(0, 8);
}
// curl -X GET "https://api.themoviedb.org/3/person/popular?api_key=YOUR_API_KEY&language=ru-RU&page=1"
export async function getActors() {
  const { data } = await axios.get(
    `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&language=ru-RU&page=1`
  );
  return data;
}
