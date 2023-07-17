import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box, Button, FormControl, TextField, Typography } from "@mui/material";
import { writeGroup, writeMember } from "./FirebaseAPI";
import { red } from "@mui/material/colors";

export default function NewGroup() {
  const theme = useTheme();

  const [groupName, setGroupName] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState(false);

  const handleGroupName = (event) => {
    setGroupName(event.target.value);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleClick = () => {
    if (groupName == "" || name == "") {
      setError(true);
      return false;
    }
    writeGroup(groupName);
    writeMember(groupName, name, "/default");
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
        minWidth: "75%",
      }}
    >
      <FormControl>
        <Typography gutterBottom variant="h5" component="div">
          Create New Group
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
          label="Your Name"
          variant="outlined"
          sx={{ my: 1 }}
          onChange={handleName}
        />
        <Typography
          id="errorMessage"
          color="red"
          sx={{ display: error ? "block" : "none" }}
        >
          Group Name or Your Name is empty
        </Typography>
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
