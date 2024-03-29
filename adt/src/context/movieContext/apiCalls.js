import { createMovieFailure, createMovieStart, createMovieSuccess, getMoviesFailure, getMoviesStart, getMoviesSuccess } from "./MovieActions"
import { deleteMoviesFailure, deleteMoviesStart, deleteMoviesSuccess } from "./MovieActions"
import axios from "axios";

export const getMovies = async (dispatch)=>{
    dispatch(getMoviesStart());
    try{
        const res = await axios.get("/movies", {
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken,
        },
        });
        dispatch(getMoviesSuccess(res.data))
    }catch(err){
        dispatch(getMoviesFailure());
    }
}
//create
export const createMovies = async (movie,dispatch)=>{
    dispatch(createMovieStart());
    try{
        const res = await axios.post("/movies",movie, {
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken, 
        },
        });
        dispatch(createMovieSuccess(res.data))
    }catch(err){
        dispatch(createMovieFailure());
    }
}
export const deleteMovies = async (id,dispatch)=>{
    dispatch(deleteMoviesStart());
    try{
        await axios.delete("/movies/"+id, {
            headers:{
                token:"Bearer " +JSON.parse(localStorage.getItem("user")).accessToken, 
        },
        });
        dispatch(deleteMoviesSuccess(id))
    }catch(err){
        dispatch(deleteMoviesFailure());
    }
}