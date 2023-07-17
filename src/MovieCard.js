import * as React from "react";
import { styled } from "@mui/material/styles";

import { useTheme } from "@mui/material/styles";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function MovieCard({ suggestion }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const theme = useTheme();
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", alignContent: "center" }}
    >
      <Card
        sx={{ maxWidth: 345, m: 1 }}
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
      >
        <CardMedia
          component="img"
          image={require("./static/images/readyplayerone.jpg")}
          title="ready player one"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {suggestion.name}
          </Typography>
          <Description suggestion={suggestion}></Description>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              overflow: !expanded ? "hidden" : "none",
              display: "-webkit-box",
              WebkitLineClamp: !expanded ? "5" : "0",
              WebkitBoxOrient: "vertical",
            }}
          >
            {suggestion.summary}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
      </Card>
    </Box>
  );
}

function Description({ suggestion }) {
  if (suggestion.name == "No Suggestions Yet") {
    return (
      <Typography gutterBottom variant="subtitle1" component="div"></Typography>
    );
  }
  return (
    <Typography gutterBottom variant="subtitle1" component="div">
      {suggestion.year} ‧ {suggestion.genre} ‧ {suggestion.runtime}
    </Typography>
  );
}
