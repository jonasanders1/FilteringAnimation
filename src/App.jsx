
import { useEffect, useState } from 'react'
import './App.css'
import Movie from './components/Movie';
import Filter from './components/Filter';

function App() {

  const [movies, setPopular] = useState([]);

  useEffect(()=> {
    fetchPopular();
  }, []);


  const fetchPopular = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=419ccf4e6df574acc9c99e54abfd2a04&en-US&page=1`)
    const movies = await data.json()
    setPopular(movies.results)
  }

  return (
    <div>
      <Filter />
    <div className='popular-movies'>
      {movies.map((movie) => {
        return <Movie key={movie.id} movie={movie} />
      })}
    </div>
    </div>
  )
}

export default App
