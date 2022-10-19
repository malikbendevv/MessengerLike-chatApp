import { Box, TextField } from "@mui/material";
import React from "react";

const Input = () => {
  return (
    <Box>
      <input
        placeholder="message "
        style={{
          width: "100%",
          height: "50px",
          padding: "5px",
          background: "white",
          border: "none",
          outline: "none",
        }}
      />
    </Box>
  );
};

export default Input;
