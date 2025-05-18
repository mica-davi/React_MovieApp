import { createContext, useContext, useState, useEffect } from "react";

const MovieContext =  createContext()

export const useMovieContext = () => useContext(MovieContext)

export const MovieProvider = ({children}) => {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const storedFavorites = localStorage.getItem("favorites")

        if(storedFavorites){
            setFavorites(JSON.parse(storedFavorites))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites))
    }, [favorites])

    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavs = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id == movieId)
    }

    const value = {
        favorites,
        addToFavorites,
        removeFromFavs,
        isFavorite    
    }

    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}