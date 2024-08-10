import React from 'react';
import MoviesListCard from "@/components/MoviesListCard/MoviesListCard";
import PaginationComponent from "@/components/PaginationComponent/PaginationComponent";

const MoviesList = () => {
    return (
        <div>
            <MoviesListCard/>
            <PaginationComponent/>
        </div>
    );
};

export default MoviesList;