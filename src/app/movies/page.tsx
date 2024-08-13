import React from 'react';
import MoviesList from "@/components/MoviesList/MoviesList";
import {movieService} from "@/api.service";
import {IMovie} from "@/models/IMovies";

const MoviesPage = async () => {
    let allMovies = await movieService.allMovies();
    return (
        <div>
            <MoviesList/>
            {
                allMovies.map((movie: IMovie) => (
                    <p key={movie.id}>{movie.id}. {movie.original_title}
                        </p>))
            }

        </div>
    );
};

export default MoviesPage;
