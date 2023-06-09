import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";

export default function NewGroup() {
  const theme = useTheme();
  return (
    <Box
      sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}
    >
      <FormControl>
        <Typography gutterBottom variant="h5" component="div">
          Create a New Group
        </Typography>
        <TextField label="Group Name" variant="outlined" sx={{ my: 1 }} />
        <TextField label="Your Name" variant="outlined" sx={{ my: 1 }} />
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
