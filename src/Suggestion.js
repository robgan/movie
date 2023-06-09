import * as React from "react";
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

const top100Films = [];

export default function Suggestion() {
  const theme = useTheme();
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
          options={top100Films}
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
