import css from './MOVIE.module.css'
import {Rating} from "@mui/material";
import {Link} from "react-router-dom";
import {urls} from "../../configs";
import {useDispatch, useSelector} from "react-redux";


const Movie = ({movie}) => {
    let {genres} = useSelector(store => store.movie);

    const mas = genres ? genres : [];
    let movieGenres = [];

    let dispatch = useDispatch();

    for (const genre_id of movie.genre_ids) {
        mas.map((item) => {
            if (item.id === genre_id) {
                movieGenres.push(item.name)
            }
        })
    }
    return (<div>

            <div className={css.wrap_movie}>
                <Link to={`/movie/${movie.id}`} state={movie}>
                    <div className={css.photo}>
                        <div className={css.badge}>
                            <span className={css.badge_span}>{movieGenres.map((name_ganre, index) => <span
                                key={index}>{name_ganre}</span>)}</span>
                        </div>
                        <img className={css.image_backdrop}
                             src={urls.poster + movie.poster_path}
                             alt="backdrop_path"/>
                    </div>
                </Link>
                <div className={css.wrap_info}>
                    <h2 className={css.title}>{movie.title}</h2>
                    <div className={css.info}>
                        <h5>Release date: {movie.release_date}</h5>
                        <h5>Raiting: {movie.vote_average}</h5>
                    </div>
                    <Rating className={css.raiting} name="half-rating-read" defaultValue={movie.vote_average} max={10}
                            precision={0.1} readOnly/>
                </div>
            </div>
        </div>
    );
};

export {Movie};