import React, { useEffect, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Chat from "./pages/Chat/Chat";
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate";
import { ToastContainer, toast } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useNavigate } from "react-router-dom";
import { AppContext } from "./context/AppContext";

const App = () => {
  const navigate = useNavigate();
  const { loadUserData } = useContext(AppContext);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        navigate("/chat");
        console.log(user);
        //triggering loadUserData for necessary initialization
        await loadUserData(user.uid);
      } else {
        navigate("/");
      }
    });
  }, []);
  return (
    <>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/profile" element={<ProfileUpdate />}></Route>
      </Routes>
    </>
  );
};

export default App;
