import { useState, useEffect } from "react";
import HeroSection from "./component/HeroSection";
import Movie from "./component/Movie";
import Footer from "./component/Footer";

const MOVIE_API =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=54356498bda324f2e587e2f3b2762b26";

const SEARCH_API =
  "https://api.themoviedb.org/3/search/movie?&api_key=54356498bda324f2e587e2f3b2762b26&query=";

function App() {
  //const movie = ["1", "2", "3", "4"];
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(MOVIE_API);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_API + searchTerm);

      setSearchTerm("");
    }
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <header className="header">
        <h1 className="logo">LOGO</h1>
        <form onSubmit={handleOnSubmit}>
          <input
            type="search"
            id=""
            value={searchTerm}
            onChange={handleOnChange}
            className="search"
          />
        </form>
      </header>
      <div className="hero">
        <HeroSection />
      </div>
      <div className="container">
        {movies.map((movie) => {
          return <Movie key={movie.id} {...movie} />;
        })}
      </div>
      <Footer />
    </>
  );
}

export default App;
