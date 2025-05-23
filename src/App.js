import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';

//1f5aeee5

const API_URL = 'http://www.omdbapi.com?apikey=1f5aeee5';

const movie1 = {
  Poster: "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg",
Title: "The Amazing Spiderman 2 Webb Cut",
Type: "movie",
Year: "2021",
imdbID: "tt18351128"
}

const App = () => {
  const [movies, setMovies] = useState([])

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search)
  }

  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <div className='app'>
      <h1>MovieLand</h1>

      <div className='search'>
        <input placeholder="Search for movies" value='Superman' onChange={() => {}}></input>
        <img src={SearchIcon} alt="search" onClick={() => {}}></img>
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
