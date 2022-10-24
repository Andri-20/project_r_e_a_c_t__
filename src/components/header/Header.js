import {Link} from "react-router-dom";

import css from './HEADER.module.css'
import Switcher from "../dark_light_mode/Switcher";
import Search from "../../search/search";

const Header = () => {

    return (
        <div className={css.nav_header}>
            <div><Link to={'/'}>All movies</Link></div>
            <div className={css.nav_func}>
                <Search/>
                <Switcher/>
            </div>

        </div>
    )
}
export {Header};