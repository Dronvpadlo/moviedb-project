

const MovieBaseURL: string = 'https://api.themoviedb.org';
const ImagesBaseURL: string = 'https://image.tmdb.org/t/p/w500/';
const GenresBaseURL: string = 'https://api.themoviedb.org/3/genre/movie/'
const SearchBaseURL: string ='https://api.themoviedb.org/3/search/'
export const urlBuilder = {
    movieUrl: '/3/discover/movie',
    getMoviesUrl: () => MovieBaseURL + urlBuilder.movieUrl,
}



