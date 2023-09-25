import React from "react";
import { Box, Typography } from "@mui/material";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <Box
      sx={{
        textAlign: "center",
        position: "fixed",
        bottom: "0",
        width: "100%",
      }}
    >
      <Typography variant="body2" color="text.secondary">
        Copyright ⓒ {year}
      </Typography>
    </Box>
  );
}

export default Footer;
