import {IMovie} from "@/models/IMovies";
import {createContext} from "react";

type StoreType ={
    movieStore: {
        allMovies: IMovie[]
},
    posterStore: {
        allPoster: string
}

}
const defaultValues: StoreType = {
    movieStore:{
        allMovies: []
    },
    posterStore:{
        allPoster: ''
    }
}

export const MovieContext = createContext(defaultValues)