import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { writeMember } from "./FirebaseAPI";

export default function JoinGroup() {
  const theme = useTheme();

  const [groupName, setGroupName] = React.useState("");
  const [name, setName] = React.useState("");

  const handleGroupName = (event) => {
    setGroupName(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    writeMember(groupName, name, "/default");
  };

  return (
    <Box
      sx={{ display: "flex", alignContent: "center", justifyContent: "center" }}
    >
      <FormControl>
        <Typography gutterBottom variant="h5" component="div">
          Join a Group
        </Typography>
        <TextField
          required
          label="Group Name"
          variant="outlined"
          sx={{ my: 1 }}
          onChange={handleGroupName}
        />
        <TextField
          required
          label="Group Password"
          variant="outlined"
          sx={{ my: 1 }}
        />
        <TextField
          required
          label="Your Name"
          variant="outlined"
          sx={{ my: 1 }}
          onChange={handleName}
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
