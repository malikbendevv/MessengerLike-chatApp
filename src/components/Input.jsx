import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";
import { AttachFile, Image } from "@mui/icons-material";
const Input = () => {
  return (
    <Box
      sx={{
        background: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <input
        placeholder="message "
        style={{
          width: "40%",
          height: "50px",
          padding: "5px",
          background: "white",
          border: "none",
          outline: "none",
        }}
      />
      <Stack direction="row" alignItems="center" justifyContent="space-around">
        <Image />
        <input type="file" style={{ display: "none", cursor: "pointer" }} />
        <label htmlFor="file">
          <AttachFile />
        </label>
        <Button sx={{ width: "20px" }}>Send</Button>
      </Stack>
    </Box>
  );
};

export default Input;
