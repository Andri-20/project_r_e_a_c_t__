import {urls} from "../../configs";
import css from './INFO.module.css'
import {Rating} from "@mui/material";
import {useSelector} from "react-redux";

const MovieInfo = ({movie}) => {
    return (
        <div>
            <div className={css.info_wrapper}>
                <div className={css.title_raiting}>
                    <h2>{movie.title}</h2>
                    <div className={css.raiting}>
                        <Rating className={css.stars} name="half-rating-read" defaultValue={movie.vote_average}
                                max={10}
                                precision={0.1} readOnly/>
                        <span className={css.stars_span}>
                            {movie.vote_average}/10
                        </span>
                    </div>
                </div>
                <div className={css.poster_inf}>
                    <div className={css.poster}>
                        <img className={css.photo} src={urls.poster + movie.poster_path} alt=""/>
                    </div>
                    <div className={css.poster_info}>
                        <h5>{movie.original_title}</h5>
                        <h5>Date release: {movie.release_date}</h5>
                        <div className={css.overview}>
                            <h4>{movie.overview}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieInfo;