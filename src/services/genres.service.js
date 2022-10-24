import {axiosService} from "./axios.service";
import {urls} from "../configs";

const getGenres = {
    getAll:()=>axiosService.get(urls.genres)
}
export {getGenres};