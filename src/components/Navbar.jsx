import React from "react";
import { Box, Button, Stack, Typography } from "@mui/material";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      backgroundColor="#2f2d52"
      color="white"
      height="50px"
    >
      <Box p={2}>
        <Typography variant="subtitle1" fontWeight="600">
          Malik Chat
        </Typography>
      </Box>
      <Stack direction="row" alignItems="center" spacing={1} p="10px">
        <img
          className="Image"
          src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />

        <Typography variant="body3">Malik</Typography>
        <Button
          variant="outlined"
          sx={{
            background: "#5d5b8d",
            color: "#ddddf7",
            border: "none",
            fontSize: "8px",
            cursor: "pointer",
            minWidth: "12px",
          }}
        >
          Logout
        </Button>
      </Stack>
    </Stack>
  );
};

export default Navbar;
