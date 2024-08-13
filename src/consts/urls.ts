

const MovieBaseURL: string = 'https://api.themoviedb.org';
const ImagesBaseURL: string = 'https://image.tmdb.org/t/p/w500/';
const SearchBaseURL: string ='https://api.themoviedb.org/3/search/'
export const urlBuilder = {
    movieUrl: '/3/discover/movie',
    genreUrl: '/3/genre/movie/list?=1',
    searchUrl: '/3/search/',
    getMoviesUrl: () => MovieBaseURL + urlBuilder.movieUrl,
    getGenresURl: () => MovieBaseURL + urlBuilder.genreUrl,
    getSearchUrl: () => MovieBaseURL + urlBuilder.searchUrl,
}



