import {Route, Routes} from "react-router-dom";
import {MainLayouts} from "./layouts";
import {MoviesPage} from "./pages/MoviesPage";
import {useEffect, useState} from "react";
import {getGenres} from "./services";
import CurrentMovie from "./components/current.movie/CurrentMovie";
import {useDispatch} from "react-redux";
import {addGenres} from "./redux";
import SearchMovies from "./search/search.movie";

const App = () => {

    let dispatch = useDispatch();

    useEffect(() => {
        getGenres.getAll().then(({data}) => {
            for (const genre of data.genres) {
                dispatch(addGenres(genre));
            }
        })
    }, [])

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayouts/>}>
                    <Route index element={<MoviesPage/>}/>
                    <Route path={'discover/movie'} element={<MoviesPage/>}/>
                    <Route path={'movie/:id'} element={<CurrentMovie/>}/>
                    <Route path={'search/movie'} element={<SearchMovies/>}/>
                </Route>
            </Routes>

        </div>

    )
};

export default App;