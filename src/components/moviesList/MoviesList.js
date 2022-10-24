import css from './movies.module.css'
import {useEffect, useState} from "react";
import {moviesService} from "../../services";
import {Movie} from "../movie_Info";
import {useSelector} from "react-redux";
import PaginationControlled from "../paginations/Pagination";

const MoviesList = () => {
//test
    let [movies, setMovies] = useState([]);
    let {page} = useSelector(store => store.movie);

    useEffect(() => {
        moviesService.getAll(page).then(({data}) =>
            setMovies(data.results))
    }, [page])
    //test

    return (<div>

            <div className={css.movies_wrap}>
                {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
            </div>

            <PaginationControlled/>
        </div>
    );
};

export {MoviesList};