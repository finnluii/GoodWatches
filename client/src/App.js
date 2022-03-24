import React from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = React.useState("temp movie placeholder");

  const getMovies = (searchTerm) => {
    fetch('/movies')
    .then(response => response.json())
    .then(body => setMovies(body));
  }

  React.useEffect(() => getMovies(), [])
  return (
    <div className="App" onLoad={getMovies}>
      <h1>GoodWatches</h1>
      Find Movies
      Movies: {JSON.stringify(movies)}
    </div>
  );
}

export default App;
