import {useDispatch, useSelector} from "react-redux";
import {searchMovie} from "../redux";
import {useNavigate} from "react-router-dom";

import css from './SEARCH.module.css';

const Search = () => {


    let dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();
        let titleMovie = e.target.search.value;
        dispatch(searchMovie(titleMovie))
    };

    let navigate = useNavigate();
    return (
        <div>
            <form onSubmit={submit}>
                <input className={css.input_search} type="text" placeholder={"search movie"} name={"search"}/>
                <button className={css.btn_search} type={"submit"} onClick={() => {
                    navigate('/search/movie')
                }}>search
                </button>
            </form>
        </div>
    );
};

export default Search;