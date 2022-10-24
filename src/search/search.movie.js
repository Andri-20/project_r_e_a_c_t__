import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {moviesService} from "../services";
import {Movie} from "../components";
import css from './SEARCH.module.css'

const SearchMovies = () => {
    let {query} = useSelector(store => store.movie);

    let [SearchMovie,setSearchMovie] = useState([]);

    useEffect(() => {
        moviesService.searchMovie(query)
            .then(({data})=>setSearchMovie(data.results))
    }, [query])
    return (
        <div className={css.wrap}>
            {SearchMovie?.map((movie)=><Movie movie={movie} key={movie.id}/>)}
        </div>
    );
};

export default SearchMovies;