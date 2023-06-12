import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
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

  const [movies, setMovies] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_TMDB,
    },
  };

  console.log("api key" + process.env.REACT_APP_TMDB);

  async function getMovies() {
    const response = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&sort_by=popularity.desc",
      options
    );
    const data = await response.json();
    setMovies(data.results);
    let top20movies = [];
    for (var i in data.results) {
      top20movies.push(data.results[i].original_title);
    }
    console.log(top20movies);
    setMovies(top20movies);
  }

  useEffect(() => {
    getMovies();
  }, []);

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
          freeSolo
          id="combo-box-demo"
          options={!movies ? [{ label: "Loading...", id: 0 }] : movies}
          sx={{ width: 345, my: 1 }}
          renderInput={(params) => <TextField {...params} label="Movie" />}
        />
        <Button
          href="/default"
          variant="contained"
          color="primary"
          sx={{ my: 1 }}
        >
          Submit
        </Button>
      </FormControl>
    </Box>
  );
}
