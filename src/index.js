import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Landing from "./Landing";
import ErrorPage from "./ErrorPage";
import Suggestion from "./Suggestion";
import NewGroup from "./NewGroup";
import JoinGroup from "./JoinGroup";
import Default from "./Default";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import { teal, pink } from "@mui/material/colors";

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

const router = createBrowserRouter([
  {
    path: "/movie",
    element: <Landing></Landing>,
    error: <ErrorPage></ErrorPage>,
  },
  {
    path: "newGroup",
    element: <NewGroup />,
  },
  {
    path: "joinGroup",
    element: <JoinGroup />,
  },
  {
    path: "default",
    element: <Default />,
  },
  {
    path: "suggestion",
    element: <Suggestion />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
