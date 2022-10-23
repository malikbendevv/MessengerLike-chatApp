import React, { useState, useContext } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { AttachFile, Image } from "@mui/icons-material";
import { auth } from "../Config";
import { ChatContext } from "../Context/ChatContext";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const currentUserUid = auth?.currentUser?.uid;
  const { dispatch } = useContext(ChatContext);

  const handleSend = () => {};

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
        placeholder="message"
        onChange={(e) => {
          setText(e.target.value);
        }}
        value={text}
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
        <input
          type="file"
          onChange={(e) => setText(e.target.files[0])}
          style={{ display: "none", cursor: "pointer" }}
        />
        <label htmlFor="file">
          <AttachFile />
        </label>
        <Button sx={{ width: "20px" }} onClick={handleSend}>
          Send
        </Button>
      </Stack>
    </Box>
  );
};

export default Input;
