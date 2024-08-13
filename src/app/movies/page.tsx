import React from 'react';
import MoviesList from "@/components/MoviesList/MoviesList";
import {movieService} from "@/services/api.service";
import {IMovie} from "@/models/IMovies";

const MoviesPage = () => {

    return (
        <div>
            <MoviesList/>
        </div>
    );
};

export default MoviesPage;
