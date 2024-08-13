
export interface IMovies {
    page: string,
    results: IMovie[],
    total_pages: number,
    total_results: number
}
export interface IMovie {
    adult: boolean,
    id: number,
    genre_ids: number[],
    backdrop_path: string,
    original_language: string,
    original_title: string,
    overview: string
    popularity: number,
    poster_path: number,
    release_date: string,
    title: string,
    video: boolean | string,
    vote_average: number,
    vote_count: number,
}