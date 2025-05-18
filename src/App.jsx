import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import MovieCard from './components/movieCard'
import NavBar from './components/navBar'
import Home from './pages/home'
import Favorites from './pages/favorites'
import { MovieProvider } from './context/MovieContext'
import './css/App.css'

function App() {
  const movieNumber = 1;

  return (
    <MovieProvider>
      <NavBar></NavBar>
      <main className="main-content">
        <Routes>
          <Route path='/React_MovieApp' element={<Home/>}/>
          <Route path='/React_MovieApp/favorites' element={<Favorites/>}/> 
        </Routes>
      </main>
      </MovieProvider>
  )
}

export default App
