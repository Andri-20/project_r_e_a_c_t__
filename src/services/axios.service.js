import axios from "axios";

import {baseURL} from "../configs";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use((config) => {
    const access = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTdkN2RiZGQ5MTViOTkyYjhhMTk1MTVkODNkMzQ5ZCIsInN1YiI6IjYzNGQxNTdlMTA4OWJhMDA3ZDU0MWMyMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7bxOieYgBv7u9sDM9h7CKHkha7deb9c0hFg_9P-70Ko';

    if (access) {
        config.headers.Authorization = `Bearer ${access}`
    }

    return config
})

export {
    axiosService
}