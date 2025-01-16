import { createContext, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [chatData, setChatData] = useState(null);
  const loadUserData = async (uid) => {
    try {
      // Create a reference to the Firestore document for the user.
      const userRef = doc(db, "users", uid);
      // Fetch the document snapshot using the reference.
      const userSnap = await getDoc(userRef);
      const userData = userSnap.data();
      console.log("snap", userSnap);
      setUserData(userData);
      if (userData.avatar && userData.name) {
        navigate("/chat");
      } else {
        navigate("/profile");
      }
      //update the timestamp immediately after the user logs in
      //without his there would be a delay of 60 seconds before the timestamp is updaetd fro the first time
      await updateDoc(userRef, {
        lastSeen: Date.now(),
      });
      //keep updating the lastseen after the initial update
      setInterval(async () => {
        if (auth.chatUser) {
          await updateDoc(userRef, {
            lastSeen: Date.now(),
          });
        }
      }, 60000);
    } catch (error) {}
  };
  const value = {
    userData,
    setUserData,
    chatData,
    setChatData,
    loadUserData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};
export default AppContextProvider;
