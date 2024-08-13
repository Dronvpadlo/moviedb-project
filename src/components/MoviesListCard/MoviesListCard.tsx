import React from 'react';
import PosterPreview from "@/components/PosterPreview/PosterPreview";
import StarsRating from "@/components/StarsRating/StarsRating";
import {IMovie} from "@/models/IMovies";
import {movieService} from "@/services/api.service";

const MoviesListCard = async () => {
    let allMovies = await movieService.allMovies();
    return (
        <div>
            <PosterPreview/>
            <StarsRating/>
            {
                allMovies.map((movie: IMovie) => (
                    <div key={movie.id}>
                        IMAGE: <br/>
                        Rating: {movie.vote_average} <br/>
                        Name: {movie.original_title}
                    <hr/></div>))
            }

        </div>
    );
};

export default MoviesListCard;