import {Header} from "../components";
import css from './main_layout.module.css'

import {Outlet} from "react-router-dom";

const MainLayouts = () => {
    return (
        <div>
            <Header/>
            <div className={css.wrapper}>
                <Outlet/>
            </div>
        </div>

    )
}
export {MainLayouts};