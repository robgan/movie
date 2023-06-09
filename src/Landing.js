import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

export default function Landing() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Stack
        sx={{
          m: 1,
          // maxWidth: 345,
        }}
        spacing={1}
      >
        <Button href="/newGroup" variant="contained" color="primary">
          Create Group
        </Button>
        <Button href="/joinGroup" variant="contained" color="secondary">
          Join Group
        </Button>
      </Stack>
    </Box>
  );
}
