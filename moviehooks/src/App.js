import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './header';
import Search from './search';
import Movie from './movie';
import Footer from './footer';
// http://www.omdbapi.com/?i=tt3896198&apikey=d3e6d9ee



/* const poster =
  movie === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster; */

function App() {
  var randmovie = 'lasts';
  const [poster, setPoster] = useState(0);
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [errors, setErrors] = useState(null);

  const search = (svalue) => {
    setLoading(true);
    setErrors(null);

    fetch(`http://www.omdbapi.com/?s=${svalue}&apikey=d3e6d9ee`)
      .then(response => response.json())
      .then(jsonresp => {
        if (jsonresp.Response == "True") {
          setMovies(jsonresp.Search);

        } else {
          setErrors(jsonresp.Error);
        }
        setLoading(false);
      }
      );

  }

  useEffect(() => {

    fetch(`http://www.omdbapi.com/?s=${randmovie}&apikey=d3e6d9ee`)
      .then(response => response.json())
      .then(jsonresp => {
        setMovies(jsonresp.Search);
        setLoading(false);
      }
      );
  }, [])




  return (
    <div className="App">
      <Header />
      <Search search={search} />

      <div className="movieswrper">
        {loading && !errors ?
          (<span className="loadingpage">Loading ....</span>) : errors ? (
            <div className="errorspage"> {errors}</div>
          ) : (
              movies.map((film, ind) => (
                <Movie key={`${ind}-${film.Title}`} movie={film} />
              )
              )
            )

        }
      </div>

      <Footer />
    </div>
  );
}

export default App;
