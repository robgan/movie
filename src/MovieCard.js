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

export default function MovieCard() {
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
            Ready Player One
          </Typography>
          <Typography gutterBottom variant="subtitle1" component="div">
            2018 ‧ Sci-fi/Adventure ‧ 2h 20m
          </Typography>
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
            In 2045 the planet is on the brink of chaos and collapse, but people
            find salvation in the OASIS: an expansive virtual reality universe
            created by eccentric James Halliday. When Halliday dies, he promises
            his immense fortune to the first person to discover a digital Easter
            egg that's hidden somewhere in the OASIS. When young Wade Watts
            joins the contest, he finds himself becoming an unlikely hero in a
            reality-bending treasure hunt through a fantastical world of
            mystery, discovery and danger.
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
