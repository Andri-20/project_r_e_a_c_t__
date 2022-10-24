import {createSlice} from "@reduxjs/toolkit";


let initialState = {
    Movies: [],
    movie: null,
    genres:[],
    searchMovie:'',
    page:0,
    query:''

};
export let moviesSlice = createSlice({
    name: "moviesSlice",
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.Movies.push(action.payload);
        },
        currentMovie: (state, action) => {
            const movie = state.Movies.find(movie => movie.id === action.payload)
        },
        addGenres:(state, action)=>{
            state.genres.push(action.payload)
        },
        addPage:(state, action)=>{
            state.page = action.payload;
        },
        searchMovie:(state, action)=>{
            state.query = action.payload
        }
    }
});
export let {addGenres,addPage,searchMovie} = moviesSlice.actions;
let moviesReducer = moviesSlice.reducer;
export default moviesReducer