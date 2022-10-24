import { Stack } from "@mui/system";
import React, { useState, useContext, useEffect } from "react";
import Message from "./Message";
import { ChatContext } from "../Context/ChatContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../Config";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  useEffect(() => {
    const UnSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      console.log(doc.data());
      doc.exists() && setMessages(doc.data().messages);
      console.log(doc.data());
    });
  }, [data.chatId]);
  return (
    <Stack backgroundColor="#ddddf7" p="10px" height="100%" overflow="scroll">
      {messages.map((m) => (
        <Message message={m} key={m.id} />
      ))}{" "}
    </Stack>
  );
};

export default Messages;
