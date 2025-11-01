import React, { useState } from "react";
import axios from "axios";

const Movie  = () => {
  const [query, setQuery] = useState("");
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "c9abc99b"; // your OMDb API key

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) {
      setError("Please enter a movie name!");
      setMovie(null);
      return;
    }

    try {
      setError("");
      const response = await axios.get(`https://www.omdbapi.com/?t=${query}&apikey=${API_KEY}`);
      if (response.data.Response === "False") {
        setError("Movie not found!");
        setMovie(null);
      } else {
        setMovie(response.data);
        
      }
    } catch (err) {
      setError("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div style={styles.container}>
      <h1>🎬 Movie Search</h1>
      <form onSubmit={handleSearch} style={styles.form}>
        <input
          type="text"
          placeholder="Enter movie name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Search</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {movie && (
        <div style={styles.result}>
          <h2>{movie.Title}</h2>
          <p><strong>Year:</strong> {movie.Year}</p>
          <p><strong>Genre:</strong> {movie.Genre}</p>
          <p><strong>Plot:</strong> {movie.Plot}</p>
          <img src={movie.Poster} alt={movie.Title} style={{ width: "200px", marginTop: "10px" }} />
        </div>
      )}
    </div>
  );
};

const styles = {
  container: { textAlign: "center", marginTop: "50px" },
  form: { marginBottom: "20px" },
  input: { padding: "10px", width: "250px", marginRight: "10px" },
  button: { padding: "10px 20px", cursor: "pointer" },
  result: { marginTop: "20px" },
};

export default Movie;
