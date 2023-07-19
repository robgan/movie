import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

import { readSuggestions, updateVote } from "./FirebaseAPI";

import MovieCard from "./MovieCard";

import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
import Navbar from "./Navbar";

export default function Default() {
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
      if (suggestions.length == 0) {
      } else {
        setQueue(suggestions);
        setSugg(suggestions[0]);
      }
    });
  }, []);

  function nextSuggestion(val) {
    updateVote(groupName, sugg.name, val);
    if (queue.length > 1) {
      setQueue(queue.shift());
      setSugg(queue[0]);
    } else {
      setSugg({
        name: "No more suggestions",
        year: "",
        genre: "",
        runtime: "",
        summary: "",
      });
    }
  }

  return (
    <Box>
      <Navbar></Navbar>
      <MovieCard suggestion={sugg}></MovieCard>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <IconButton
          aria-label="close"
          size="large"
          onClick={() => nextSuggestion(0)}
          sx={{
            bgcolor: "secondary.main",
            m: 1,
            ":hover": {
              bgcolor: "secondary.darker",
            },
          }}
        >
          <CloseIcon style={{ fontSize: 60 }} />
        </IconButton>
        <IconButton
          aria-label="done"
          size="large"
          onClick={() => nextSuggestion(1)}
          sx={{
            bgcolor: "primary.main",
            m: 1,
            ":hover": {
              bgcolor: "primary.darker",
            },
          }}
        >
          <DoneIcon style={{ fontSize: 60 }} />
        </IconButton>
      </Box>
    </Box>
  );
}
