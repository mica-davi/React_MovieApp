import "../css/Favorites.css"
import "../css/Home.css"
import { useMovieContext } from "../context/MovieContext"
import MovieCard from "../components/movieCard"

function Favorites(){
    const {favorites} = useMovieContext()

    if(favorites){
        return (
            <div className="favorites">
                <div className="movies-grid">
                    {favorites.map((movie) => 
                        <MovieCard movie={movie} key={movie.id}/>
                    )}
                </div>
            </div>
        )
    }

    return (
        <div className="favorites-empty">
            <h2>No favorite movies yet</h2>
            <p>Start adding movies to your favorites and they will appear here</p>
        </div>
    )
}

export default Favorites