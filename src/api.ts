const API_KEY = "2c5065dd4318a19ec7c6bba0dee2d3f8";
const BASE_PATH = "https://api.themoviedb.org/3/";
interface IMovie {
    id: number;
    backdrop_path: string;
    poster_path: string;
    title: string;
    overview: string;
}
export interface IGetMoviesResult {
    dates: {
        maximun: string;
        minimun: string;
    };
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
}

export function getMovies() {
    return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
        (response) => response.json()
    );
}
