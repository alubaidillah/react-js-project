import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//1f5aeee5

const API_URL = 'http://www.omdbapi.com?apikey=1f5aeee5';



const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies('Captain America')
  }, [])

  return (
    <div className='app'>
      <h1>Cari Film Kaks</h1>

      <div className='search'>
        <input placeholder="Search for movies" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}></input>
        <img src={SearchIcon} alt="search" onClick={() => searchMovies(searchTerm)}></img>
      </div>

      {
        movies?.length > 0
        ? (
          <div className='container'>
          {movies.map((movie) => (
            <MovieCard movie={movie} />
            ))}
        </div>
        ) : (
          <div className='empty'>
            <h2>No Movies found</h2>
          </div>
        )
      }
      
    </div>
  )
}

export default App;
