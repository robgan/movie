import * as React from "react";
import IconButton from "@mui/material/IconButton";
import { useTheme } from "@mui/material/styles";

import MovieCard from "./MovieCard";

import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";

import { Box, SpeedDial, SpeedDialAction } from "@mui/material";
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
        <SpeedDial
          ariaLabel="SpeedDial basic example"
          FabProps={{
            sx: {
              bgcolor: "secondary.main",
              "&:hover": {
                bgcolor: "secondary.darker",
              },
            },
          }}
          sx={{
            position: "absolute",
            bottom: 16,
            right: 16,
            bgcolor: "secondary",
          }}
          icon={<SpeedDialIcon />}
        >
          <SpeedDialAction
            key="New Suggestion"
            icon={<AddIcon />}
            tooltipTitle="New Suggestion"
            href="/suggestion"
          />
        </SpeedDial>
      </Box>
    </Box>
  );
}
