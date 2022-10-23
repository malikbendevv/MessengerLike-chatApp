import React, { useState } from "react";
import { IconButton, Paper, Box } from "@mui/material";
import { Search } from "@mui/icons-material";
import {
  collection,
  getDoc,
  getDocs,
  query,
  where,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "../Config";

const Searche = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  const onSubmit = async () => {
    const q = query(
      collection(db, "users"),
      where("displayName", "==", username)
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
    } catch (err) {
      setError(true);
    }
  };

  const handleKey = (e) => {
    e.code === "Enter" && onSubmit();
  };

  const handleSelect = async () => {
    console.log("1");
    console.log(user);
    const combinedId =
      auth.currentUser.uid > user.uid
        ? auth.currentUser.uid + user.uid
        : user.uid + auth.currentUser.uid;
    console.log("2");
    console.log(combinedId);
    try {
      const res = await getDoc(doc(db, "chats", combinedId));
      console.log("3");
      if (!res.exists()) {
        console.log("4");

        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        console.log("5");

        // create user chat
        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
        console.log("6");

        await updateDoc(doc(db, "userChats", auth.currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: auth.currentUser.uid,
            displayName: auth.currentUser.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
    } catch (err) {
      console.log(err);
      setUser(null);
      setUsername("");
    }
  };

  return (
    <>
      <Paper
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
          value={username}
          onKeyDown={handleKey}
          style={{
            border: "none",
            backgroundColor: "#3e3c61",
            color: "white",
            "&:: placeholder": { color: "white" },
            outline: "none",
          }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <IconButton type="submit" sx={{ color: "white" }} onClick={onSubmit}>
          <Search />
        </IconButton>
      </Paper>
      {error && <span>User Not found</span>}
      {user && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
            padding: "4px",
            borderBottom: "0.5px solid white",
            ":hover": { backgroundColor: "#2f2d52" },
          }}
          onClick={handleSelect}
        >
          <img
            className="Image ImageUser"
            src="https://images.pexels.com/photos/10272672/pexels-photo-10272672.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
          <div
            style={{
              cursor: "pointer",
              width: "100%",
            }}
          >
            <span
              style={{
                color: "white",
                paddingLeft: "12px",
                cursor: "pointer",
              }}
            >
              {user.displayName}
            </span>
          </div>
        </Box>
      )}
    </>
  );
};
export default Searche;
