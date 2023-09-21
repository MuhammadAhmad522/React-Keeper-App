import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import Collapse from "@mui/material/Collapse";

// Import the DynamicTimeDisplay component
import DynamicTimeDisplay from "./DynamicTimeDisplay";

function Note(props) {
  console.log(props.timestamp);
  const [expanded, setExpanded] = useState(false);

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function handleDeleteClick() {
    props.onDelete(props.id);
  }

  const currentDate = new Date().toLocaleDateString();

  return (
    <Card className="note">
      <CardHeader
        title={props.title}
        subheader={<DynamicTimeDisplay timestamp={props.timestamp} />} // Use DynamicTimeDisplay here
        action={
          <IconButton onClick={handleExpandClick} aria-expanded={expanded}>
            <ExpandMoreIcon
              sx={{
                transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.2s",
              }}
            />
          </IconButton>
        }
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {expanded ? props.content : `${props.content.substring(0, 10)}...`}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleDeleteClick} aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Note;
