const express = require("express");
const app = express();

const { initializeDatabase } = require("./db/db");
const Movie = require("./models/movies.models");
app.use(express.json());
initializeDatabase();

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
    console.log(movieByDirector);
  } catch (error) {
    throw error;
  }
}

app.get("/movies/director/:directorName", aynnc (req, res) => {
  try {
    
  }catch(error){
    res.status(500).json({error : })
  }
})
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
