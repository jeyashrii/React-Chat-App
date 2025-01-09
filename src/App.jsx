import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Chat from "./pages/Chat/Chat";
import ProfileUpdte from "./pages/ProfileUpdate/ProfileUpdate";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/chat" element={<Chat />}></Route>
        <Route path="/profile" element={<ProfileUpdte />}></Route>
      </Routes>
    </>
  );
};

export default App;
