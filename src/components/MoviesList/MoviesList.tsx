"use client"
import React from 'react';
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";
import {IMovie} from "@/models/IMovies";
import {movieService} from "@/services/api.service";
import {IGenre} from "@/models/IGenres";
import {MyContext} from "@/context/context";

const MoviesList = async () => {
    const movies:IMovie[] = await movieService.allMovies()
    const genres:IGenre[] = await movieService.allGenres()
    return (
        <div>
            <MyContext.Provider value={
                {
                    moviesStore: {
                        allMovies: movies
                    },
                    genresStore: {
                        allGenres: genres
                    },
                    searchStore: {
                        searchResponse: []
                    }
                }
            } >
                {
                    movies.map((movie: IMovie) => (
                        <div key={movie.id}>
                            IMAGE: <br/>
                            Rating: {movie.vote_average} <br/>
                            Name: {movie.original_title}
                            <hr/></div>))
                }
            <MoviesListCard/>
            <PaginationComponent/>
            </MyContext.Provider>
        </div>
    );
};

export default MoviesList;