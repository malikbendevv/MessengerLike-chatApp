import React from "react";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
import Searche from "./Search";
import Chats from "./Chats";
const Sidebar = () => {
  return (
    <Box sx={{ flex: 1, backgroundColor: "#3e3c61" }}>
      <Navbar />
      <Searche />
      <Chats />
    </Box>
  );
};

export default Sidebar;
