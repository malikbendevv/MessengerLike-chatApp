import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { ChatContext } from "../Context/ChatContext";
import { auth, db } from "../Config";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const currentUserUid = auth?.currentUser?.uid;
  const { dispatch } = useContext(ChatContext);

  // useEffect
  useEffect(() => {
    console.log("ss", currentUserUid);
    if (currentUserUid) {
      const unsub = onSnapshot(doc(db, "userChats", currentUserUid), (doc) => {
        console.log("Current data:", doc.data());
        setChats(doc.data());
        console.log(Object.entries(doc.data()));
      });
      return () => {
        unsub();
      };
    }
  }, [currentUserUid]);

  // handle Select
  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <>
      {Object.entries(chats)?.map((chat) => (
        <Box
          key={chat[0]}
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            padding: "4px",
            ":hover": { backgroundColor: "#2f2d52" },
          }}
          onClick={handleSelect}
        >
          <img
            className="Image ImageUser"
            src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div style={{ cursor: "pointer" }}>
            <span style={{ color: "white", paddingLeft: "12px" }}>
              {chat[1].userInfo.displayName}
            </span>
            <p>{chat[1].userInfo.lastMessage?.text}</p>
          </div>
        </Box>
      ))}
    </>
  );
};

export default Chats;
