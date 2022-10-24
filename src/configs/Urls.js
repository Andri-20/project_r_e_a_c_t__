const baseURL = 'https://api.themoviedb.org/3';

const urls = {
    movies:'/discover/movie',
    genres:'/genre/movie/list',
    poster:'https://image.tmdb.org/t/p/original/',
    search:'/search/movie?api_key={api_key}&query='
}

export {
    baseURL,
    urls
}