import React, { useState } from "react";
import { IconButton, Paper, Box } from "@mui/material";
import { Search } from "@mui/icons-material";

const Searche = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const onSubmit = () => {};
  return (
    <>
      <Paper
        component="form"
        onSubmit={onSubmit}
        sx={{
          borderRadius: 20,
          backgroundColor: "#3e3c61",
          pl: 2,
          boxShadow: "none",
          width: "200px",
        }}
      >
        <input
          className="search-bar"
          placeholder="Find a user"
          value={searchTerm}
          style={{
            border: "none",
            backgroundColor: "#3e3c61",
            color: "white",
            "&:: placeholder": { color: "white" },
            outline: "none",
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <IconButton type="submit" sx={{ color: "white" }}>
          <Search />
        </IconButton>
      </Paper>
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
          <span
            style={{ color: "white", paddingLeft: "12px", cursor: "pointer" }}
          >
            Jane
          </span>
        </div>
      </Box>
    </>
  );
};
export default Searche;
