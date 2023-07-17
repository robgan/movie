import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { writeSuggestion } from "./FirebaseAPI";
import {
  Autocomplete,
  Box,
  Button,
  FormControl,
  FormLabel,
  TextField,
  Typography,
} from "@mui/material";

export default function Suggestion() {
  const theme = useTheme();

  const [movies, setMovies] = React.useState([]);
  const [suggestion, setSuggestion] = React.useState(movies[0]);
  // const [id, setId] = React.useState(0);

  // get top20 movies on load
  React.useEffect(() => {
    getTop20();
  }, []);

  //update options as typing
  const handleSuggestion = async (event) => {
    setSuggestion(event.target.value);
    // if (suggestion == "") {
    //   await getTop20();
    // } else {
    await getMovieAutocomplete(suggestion);
    // }
  };

  // click autocomplete option
  const handleChange = async (event, value) => {
    setSuggestion(value);
  };

  // click submit button
  const handleClick = async () => {
    getMovie(suggestion.id);
  };

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_TMDB,
    },
  };

  async function getMovie(id) {
    console.log("get movie: " + id);
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "?language=en-US",
      options
    );
    const data = await response.json();
    console.log(data);
    // write to firebase
    createSuggestion(data);
  }

  function createSuggestion(data) {
    let genre = "";
    for (var i = 0; i < data.genres.length; i++) {
      genre = genre.concat(data.genres[i].name);
      if (i < data.genres.length - 1) {
        genre = genre.concat("/");
      }
    }

    writeSuggestion(
      "Fam",
      data.original_title,
      data.release_date.substring(0, 4),
      genre,
      data.runtime,
      data.overview,
      0,
      0,
      "/default"
    );
  }

  async function getMovieAutocomplete(movieName) {
    console.log("autocomplete");
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movieName +
        "&include_adult=false&language=en-US&page=1",
      options
    );

    const data = await response.json();

    let top20movies = [];
    for (var i in data.results) {
      top20movies.push({
        id: data.results[i].id,
        name: data.results[i].original_title,
        year: data.results[i].release_date.substring(0, 4),
      });
    }
    setMovies(top20movies);
  }

  async function getTop20() {
    console.log("top20");
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc",
      options
    );
    const data = await response.json();
    let top20movies = [];
    for (var i in data.results) {
      top20movies.push({
        id: data.results[i].id,
        name: data.results[i].original_title,
        year: data.results[i].release_date.substring(0, 4),
      });
    }
    setMovies(top20movies);
  }

  return (
    <Box
      sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}
    >
      <FormControl>
        <Typography gutterBottom variant="h5" component="div">
          Suggestion
        </Typography>
        <FormLabel>Movie</FormLabel>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          getOptionLabel={(option) => option.name + " | " + option.year}
          isOptionEqualToValue={(option, value) => option.id === value.id}
          onInputChange={handleSuggestion}
          onChange={handleChange}
          options={movies}
          sx={{ width: 345, my: 1 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ my: 1 }}
          onClick={handleClick}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
