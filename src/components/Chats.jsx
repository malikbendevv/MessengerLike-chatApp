import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import { doc, onSnapshot } from "firebase/firestore";
import { ChatContext } from "../Context/ChatContext";
import { AuthContext } from "../Context/AuthContext";
import { auth, db } from "../Config";

const Chats = () => {
  const [chats, setChats] = useState([]);
  const { currentUser } = useContext(AuthContext);
  // const currentUserUid = currentUser.uid;
  const { dispatch } = useContext(ChatContext);

  // useEffect
  useEffect(() => {
    if (currentUser.uid) {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });
      return () => {
        unsub();
      };
    }
  }, [currentUser.uid]);

  // handle Select
  const handleSelect = (u) => {
    dispatch({ type: "CHANGE_USER", payload: u });
  };
  return (
    <>
      {Object.entries(chats)
        ?.sort((a, b) => b[1].date - a[1].date)
        .map((chat) => (
          <Box
            key={chat[0]}
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: "4px",
              ":hover": { backgroundColor: "#2f2d52" },
            }}
            onClick={() => handleSelect(chat[1].userInfo)}
          >
            <img
              className="Image ImageUser"
              src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div style={{ cursor: "pointer" }}>
              <p style={{ color: "white", paddingLeft: "12px" }}>
                {chat[1].userInfo.displayName}
                <span style={{ display: "block", color: "gray" }}>
                  {chat[1].lastMessage?.text}
                </span>
              </p>
            </div>
          </Box>
        ))}
    </>
  );
};

export default Chats;
