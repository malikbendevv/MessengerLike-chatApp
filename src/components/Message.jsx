import React, { useContext, useRef, useEffect } from "react";

import { Box, Stack, Typography } from "@mui/material";
import { ChatContext } from "../Context/ChatContext";
import { AuthContext } from "../Context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();
  // useEffect
  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
  console.log("message", message);
  return (
    <Stack
      direction={currentUser.uid === message?.sendId ? "row" : "row-reverse"}
      alignItems="start"
      justifyContent={
        currentUser.uid === message?.sendId ? "flex-end" : "flex-start"
      }
      spacing={2}
    >
      <Box sx={{ display: "flex", flexDirection: "column", marginTop: "15px" }}>
        <Typography
          sx={{
            alignSelf: "flex-end",
            width: "50px",
            maxWidth: "content-fit",
            textAlign: "center",
            color: "white",
            fontWeight: "500",
            padding: "4px",
            marginBottom: "5px",
            background: "lightblue",
            borderRadius: "20px 10px 20px 20px ",
          }}
        >
          {" "}
          {message.text}{" "}
        </Typography>
        {/* <img
          className=" ImageSent"
          src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        /> */}
      </Box>
      <Box sx={{}}>
        <img
          className="Image ImageUser"
          src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <Typography variant="body2"> Just now</Typography>
      </Box>{" "}
    </Stack>
  );
};

export default Message;
