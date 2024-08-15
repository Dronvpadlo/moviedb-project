"use client"
import React from 'react';
import {MyContext} from "@/context/context";
import {IMovie} from "@/models/IMovies";
import {movieService} from "@/services/api.service";
import {IGenre} from "@/models/IGenres";

const GenreBadge = async () => {
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
                    genres.map((genre: IGenre) => (
                        <div key={genre.id}>
                            ID: {genre.id} <br/>
                            Name: {genre.name}
                            <hr/>
                        </div>))
                }
            </MyContext.Provider>
        </div>
    );
};

export default GenreBadge;