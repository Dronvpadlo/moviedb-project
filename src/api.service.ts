import {urlBuilder} from "@/consts/urls";
import {IMovie} from "@/models/IMovies";

const movieService = {
    allMovies: async (): Promise<IMovie[]> => {
        const token: string = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlM2I3OGFmMzdhZjQxYWE0NGUzODRlZjAxYTg3ZTJhMyIsIm5iZiI6MTcyMzU1MjM5NC4yMjIxMDEsInN1YiI6IjY2Yjc0MmQ0NzEyNTI0Njc4NDU5NjM1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.O3Bny5zFk77NDWusx4MkBjt9jH_IZssOMkgTbidbRJE';
        const response = await fetch(urlBuilder.getMoviesUrl(), {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        let movies = await response.json();
        let movieCard = movies.results
        console.log(movieCard);
        return movieCard;
    }
}

export {
    movieService
}
