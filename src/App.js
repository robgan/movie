import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, pink } from "@mui/material/colors";

import Landing from "./Landing";
import Default from "./Default";
import Suggestion from "./Suggestion";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500],
      lighter: teal[400],
      darker: teal[600],
    },
    secondary: {
      main: pink["A400"],
      lighter: pink["A200"],
      darker: pink["A700"],
    },
  },
});

export default function Palette() {
  return (
    <ThemeProvider theme={theme}>
      <Landing></Landing>
      <Default></Default>
      <Suggestion></Suggestion>
    </ThemeProvider>
  );
}
