import MovieCard from "../components/movieCard"
import { useEffect, useState } from "react"
import { searchMovies, getPopularMovies } from "../services/api"
import "../css/Home.css"

function Home(){
    const [searchQuery, setSearchQuery] = useState("")
    const [movies, setMovies] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    
    useEffect(() => {
        const loadPopularMovies = async () => {
            try{
                const popularMovies = await getPopularMovies()
                setMovies(popularMovies)
            }catch(e){
                alert(e)
                setError("Failed to load movies")
            }finally{
                setLoading(false)
            }
        }

        loadPopularMovies()
    }, [])

    const handleSearch = async (e) => {
        e.preventDefault()
        
        if(!searchQuery.trim()) return
        if(loading) return
        setLoading(true)

        try{
            const getSearchMovie = await searchMovies(searchQuery)
            setMovies(getSearchMovie)
            setError(null)
        }catch(e){
            alert(e)
            setError("Failed to load movies")
        }finally{
            setLoading(false)
        }

    }
    return (
        <>
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" placeholder="search movie..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}></input>
                <button type="submit" className="search-button">Search</button>
            </form>

            {error && <div className="error-message">{error}</div>}
            {
                loading ? <div className="loading">Loading...</div> : <div className="movies-grid">
                    {movies.map((movie) => 
                        <MovieCard movie={movie} key={movie.id}/>
                    )}
                </div>
            }
            
        </>
    )
}

export default Home