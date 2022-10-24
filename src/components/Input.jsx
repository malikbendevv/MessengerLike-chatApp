import React, { useState, useContext } from "react";
import { Box, Button, Stack, TextField } from "@mui/material";
import { AttachFile, Image } from "@mui/icons-material";
import { auth, db } from "../Config";
import { ChatContext } from "../Context/ChatContext";
import {
  arrayUnion,
  updateDoc,
  doc,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import { v4 as uuid } from "uuid";
import { AuthContext } from "../Context/AuthContext";

const Input = () => {
  const [text, setText] = useState("");
  const [img, setImg] = useState("");

  const { data } = useContext(ChatContext);
  const { currentUser } = useContext(AuthContext);
  const currentUserUid = currentUser.uid;

  const handleSend = async () => {
    console.log("chat Id", data.chatId);
    if (img) {
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          sendId: currentUserUid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUserUid), {
      [data.chatId + ".lastMessage"]: { text },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: { text },
      [data.chatId + ".date"]: serverTimestamp(),
    });
    setText("");
    setImg(null);
  };

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
