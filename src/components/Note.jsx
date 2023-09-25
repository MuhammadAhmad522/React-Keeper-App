import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActionArea from "@mui/material/CardActionArea";
import DynamicTimeDisplay from "./DynamicTimeDisplay";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

function Note(props) {
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  const truncatedTitle =
    props.title.length > 30
      ? `${props.title.substring(0, 30)}...`
      : props.title;

  return (
    <Card className="note">
      <CardActionArea onClick={handleExpandClick}>
        <CardHeader
          title={
            <Typography variant="h6">
              {expanded ? props.title : truncatedTitle}
            </Typography>
          }
          subheader={<DynamicTimeDisplay timestamp={props.timestamp} />}
        />
        <CardContent>
          <Typography
            variant="body2"
            variantMapping={{ body2: "p" }}
            color="text.secondary"
          >
            {expanded ? props.content : `${props.content.substring(0, 10)}...`}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions>
        <IconButton onClick={handleDeleteClick} aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit">
          <ModeEditIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Note;
