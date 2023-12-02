import logo from './logo.svg';

// Import components
import MovieList from './MovieList';

import './moviedata.json';
import './App.css';
import { useState } from 'react';

function App() {
  // Reads the set of data
  const [ movieList, setMovieList ] = useState(moviedata);

  return (
    <div className="App">
      <header>
        <h1 className="App-banner">🎥 Movie Tracker</h1>
      </header>
      <MovieList movieList={moviedata}/>
    </div>
  );
}

export default App;
