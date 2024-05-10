const express = require("express");
const app = express();
const { initializeDatabase } = require("./db/db");
const Movie = require("./models/movies.models");
app.use(express.json());
initializeDatabase();
/* 
const newMovie = {
  title: "New Movie",
  releaseYear: 2024,
  genre: ["Drama"],
  director: "Aditya Roy Chopra",
  actors: ["Actor 1", "Actor 2"],
  language: "Hindi",
  country: "India",
  rating: 6.1,
  plot: "A young man and woman Europe trip.",
  awards: "IFA Filmfare Awards",
  posterUrl: "https://example.com/new-poster1.jpg",
  trailerUrl: "https://example.com/new-trailer1.mp4",
};
 */
async function createMovie(newMovie) {
  try {
    const movie = new Movie(newMovie);
    const saveMovie = await movie.save();
    return saveMovie
  } catch (error) {
    throw error;
  }
}

app.post("/movies", async (req, res) => {
  try {
    const savedMovie = await createMovie(req.body);
    res
      .status(201)
      .json({ message: "Movie added successfully.", movie: savedMovie });
  } catch (error) {
    res.status(500).json({ error: "Failed to add movie" });
  }
});

//find a movie with a particular title
async function readMovieByTitle(movieTitle) {
  try {
    const movie = await Movie.findOne({ title: movieTitle });
    return movie;
  } catch (error) {
    throw error;
  }
}

app.get("/movies/:title", async (req, res) => {
  try {
    const movie = await readMovieByTitle(req.params.title);
    if (movie) {
      res.json(movie);
    } else {
      res.status(404).json({ error: "Movie not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movioe" });
  }
});

//to get all the movies from the db

async function readAllMovies() {
  try {
    const allMovies = await Movie.find();
    return allMovies;
  } catch (error) {
    throw error;
  }
}

app.get("/movies", async (req, res) => {
  try {
    const movies = await readAllMovies();
    if (movies.length != 0) {
      res.json(movies);
    } else {
      res.status(404).json({ error: "No movies found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  }
});

//get movie by director name

async function readMovieByDirector(directorName) {
  try {
    const movieByDirector = await Movie.find({ director: directorName });
    return movieByDirector;
  } catch (error) {
    throw error;
  }
}

app.get("/movies/director/:directorName", async (req, res) => {
  try {
    const movies = await readMovieByDirector(req.params.directorName);
    if (movies.length != 0) {
      res.json(movies);
    } else {
      res.status(404).json({ error: "No movies found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
});

//read movies by genre

async function readMovieByGenre(genreName) {
  try {
    const movieByGenre = await Movie.find({ genre: genreName });
    return movieByGenre;
  } catch (error) {
    throw error;
  }
}

app.get("/movies/genres/:genreName", async (req, res) => {
  try {
    const movie = await readMovieByGenre(req.params.genreName);
    if (movie.length != 0) {
      res.json(movie);
    } else {
      res.status(404).json({ error: "Movie not found." });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch movies." });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
