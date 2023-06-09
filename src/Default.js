import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

import MovieCard from "./MovieCard";

import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";

import { Box } from "@mui/material";
import Navbar from "./Navbar";

export default function Default() {
  const theme = useTheme();

  return (
    <Box>
      <Navbar></Navbar>
      <MovieCard></MovieCard>

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
