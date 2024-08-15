"use client"

import React, {} from 'react';
import PosterPreview from "@/components/PosterPreview/PosterPreview";
import StarsRating from "@/components/StarsRating/StarsRating";
import {IMovie} from "@/models/IMovies";
import {movieService} from "@/services/api.service";
import {MyContext} from "@/context/context";
import {IGenre} from "@/models/IGenres";

const MoviesListCard = async () => {
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
            <PosterPreview/>
            <StarsRating/>
            {
                movies.map((movie: IMovie) => (
                    <div key={movie.id}>
                        IMAGE: <br/>
                        Rating: {movie.vote_average} <br/>
                        Name: {movie.original_title}
                    <hr/></div>))
            }
                </MyContext.Provider>
        </div>
    );
};

export default MoviesListCard;