import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./slices/movies.slice";

let store = configureStore({
    reducer: {
        movie: moviesReducer
    }
});
export {store}