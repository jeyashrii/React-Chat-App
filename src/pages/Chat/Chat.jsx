import React from "react";
import "./Chat.css";
import Chatbox from "../../components/Chatbox/Chatbox";
import LeftSideBar from "../../components/LeftSideBar/LeftSideBar";
import RightSideBar from "../../components/RightSideBar/RightSideBar";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat-container">
        <LeftSideBar></LeftSideBar>
        <Chatbox></Chatbox>
        <RightSideBar></RightSideBar>
      </div>
    </div>
  );
};

export default Chat;
