import * as React from "react";
import {
  AppBar,
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";

import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";

import { readUserGroups } from "./FirebaseAPI";

export default function Navbar() {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const [groups, setGroups] = React.useState([]);
  const name = "Fishy";

  // get list of groups
  React.useEffect(() => {
    readUserGroups(name).then((groups) => {
      setGroups(groups);
    });
  }, []);

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {groups.map((text, index) => (
        <List sx={{ py: 0 }}>
          <ListItem key={text} disablePadding>
            <ListItemButton href="/default">
              <ListItemIcon>{<CircleIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
          <ListItem key="Results" sx={{ pl: 4, py: 0, pr: 0 }}>
            <ListItemButton href="/results">
              <ListItemIcon>{<CircleIcon />}</ListItemIcon>
              <ListItemText primary="Results" />
            </ListItemButton>
          </ListItem>
        </List>
      ))}
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton href="/newGroup">
            <ListItemIcon>{<CircleIcon />}</ListItemIcon>
            <ListItemText> Create New Group</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton href="/joinGroup">
            <ListItemIcon>{<CircleIcon />}</ListItemIcon>
            <ListItemText> Join Group</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        {[""].map((anchor) => (
          <React.Fragment key={anchor}>
            <IconButton
              onClick={toggleDrawer(anchor, true)}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
              {anchor}
            </IconButton>
            <Drawer
              anchor={"left"}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}

        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        ></Typography>
        <Button
          href="/suggestion"
          variant="contained"
          color="secondary"
          // onClick={handleInsert()}
          startIcon={<AddIcon />}
        >
          New
        </Button>
      </Toolbar>
    </AppBar>
  );
}
