import React from "react";
import { Box } from "@mui/material";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        backgroundColor: "#a7bcff",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          border: "1px solid white",
          borderRadius: "10px",
          width: "65%",
          height: "80%",
          display: "flex",
          overflow: "hidden",
        }}
      >
        <Sidebar />
        <Chat />
      </Box>
    </Box>
  );
};

export default Home;
