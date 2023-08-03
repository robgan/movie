import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

import { readSuggestions, updateVote } from "./FirebaseAPI";

import MovieCard from "./MovieCard";

import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

import { Box, SpeedDial, SpeedDialAction, Typography } from "@mui/material";
import Navbar from "./Navbar";

export default function Results() {
  const theme = useTheme();
  const groupName = "Fam";

  const [queue, setQueue] = React.useState([
    {
      name: "No Suggestions Yet",
      year: "",
      genre: "",
      runtime: "",
      summary: "",
    },
  ]);
  const [sugg, setSugg] = React.useState(queue[0]);

  // get list of suggestions
  React.useEffect(() => {
    readSuggestions(groupName).then((suggestions) => {
      if (suggestions.length != 0) {
        setQueue(suggestions);
        setSugg(suggestions[0]);
      }
    });
  }, []);

  return (
    <Box>
      <Navbar></Navbar>
      <MovieCard suggestion={sugg}></MovieCard>
      <Typography>Yes: {sugg.yes}</Typography>
      <Typography>No: {sugg.no}</Typography>
    </Box>
  );
}
