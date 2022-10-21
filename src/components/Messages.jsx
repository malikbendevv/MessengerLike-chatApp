import { Stack } from "@mui/system";
import React from "react";
import Message from "./Message";
const Messages = () => {
  return (
    <Stack backgroundColor="#ddddf7" p="10px" height="100%" overflow="scroll">
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </Stack>
  );
};

export default Messages;
