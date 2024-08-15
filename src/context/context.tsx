import {createContext, useContext} from "react";
import {IMovie} from "@/models/IMovies";
import {IGenre} from "@/models/IGenres";
import {ISearch} from "@/models/Search";

type StoreType = {
    moviesStore: {
        allMovies: IMovie[]
},
    genresStore: {
        allGenres: IGenre[]
    },
    searchStore: {
        searchResponse: ISearch[]
    }
}

const defaultValues: StoreType = {
    moviesStore: {
        allMovies: []
    },
    genresStore: {
        allGenres: []
    },
    searchStore: {
        searchResponse: []
    }
}



export const MyContext = createContext<StoreType>(defaultValues);

export const useMyContext = (): StoreType => useContext(MyContext);