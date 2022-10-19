import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { VideoCall, PersonAddAlt, MoreHoriz } from "@mui/icons-material";
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
  return (
    <Box
      sx={{
        flex: 2,
        borderLeft: "1px solid black",
      }}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height="50px"
        backgroundColor="#5d5d8d"
      >
        <Typography variant="body2" color="white" pl="5px">
          {" "}
          Jane
        </Typography>
        <Stack direction="row" spacing={1} pr="7px">
          <VideoCall sx={{ color: "white" }} />
          <PersonAddAlt sx={{ color: "white" }} />
          <MoreHoriz sx={{ color: "white" }} />
        </Stack>
      </Stack>
      <Box
        sx={{
          height: "94%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Messages />
        <Input />
      </Box>
    </Box>
  );
};

export default Chat;
