import React from "react";
import "./Chatbox.css";
import assets from "../../assets/assets";

const Chatbox = () => {
  return (
    <div className="chat-box">
      {/*header(user name)*/}
      <div className="chat-user">
        <img src={assets.profile_img} alt=""></img>
        <p>
          Richard sanford<img className="dot" src={assets.green_dot}></img>
        </p>
        <img src={assets.help_icon}></img>
      </div>
      {/*//body(msgs)*/}
      <div className="chat-msg">
        <div className="sent-msg">
          <p className="msg">im fine</p>
          <div>
            <img src={assets.profile_img}></img>
            <p>2:30pm</p>
          </div>
        </div>
        <div className="sent-msg">
          <img className="msg-img" src={assets.pic1}></img>
          <div>
            <img src={assets.profile_img}></img>
            <p>2:30pm</p>
          </div>
        </div>

        <div className="received-msg">
          <p className="msg">hey how are you?</p>
          <div>
            <img src={assets.profile_img}></img>
            <p>2:30pm</p>
          </div>
        </div>
      </div>

      {/*//footer(type msg)*/}
      <div className="chat-input">
        <input type="text" placeholder="send a message"></input>
        <input
          type="file"
          id="image"
          accept="image/png,image/jpeg"
          hidden
        ></input>
        <label htmlFor="image">
          <img src={assets.gallery_icon}></img>
        </label>
        <img src={assets.send_button}></img>
      </div>
    </div>
  );
};

export default Chatbox;
