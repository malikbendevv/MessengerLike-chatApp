import { Box } from "@mui/material";
import React from "react";

const Chats = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "4px",
          ":hover": { backgroundColor: "#2f2d52" },
        }}
      >
        <img
          className="Image ImageUser"
          src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div style={{ cursor: "pointer" }}>
          <span style={{ color: "white", paddingLeft: "12px" }}>Jane</span>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "4px",
          ":hover": { backgroundColor: "#2f2d52" },
        }}
      >
        <img
          className="Image ImageUser"
          src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div style={{ cursor: "pointer" }}>
          <span style={{ color: "white", paddingLeft: "12px" }}>Jane</span>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "4px",
          ":hover": { backgroundColor: "#2f2d52" },
        }}
      >
        <img
          className="Image ImageUser"
          src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div style={{ cursor: "pointer" }}>
          <span style={{ color: "white", paddingLeft: "12px" }}>Jane</span>
        </div>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          padding: "4px",
          ":hover": { backgroundColor: "#2f2d52" },
        }}
      >
        <img
          className="Image ImageUser"
          src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div style={{ cursor: "pointer" }}>
          <span style={{ color: "white", paddingLeft: "12px" }}>Jane</span>
        </div>
      </Box>
    </>
  );
};

export default Chats;
