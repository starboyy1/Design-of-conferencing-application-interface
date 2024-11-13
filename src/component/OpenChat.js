import React from "react";
import Header from "../openChat/Header";
import ChatInputBar from "../openChat/MessageBar";
import ChatMessages from "../openChat/Chatinput";
import HeaderText from "../ManageRequest/HeaderText";
import ChatHeader from "../ManageRequest/ChatHeader";
import AddLogo from "../ManageRequest/AddLogo";
// import Calls from "../openChat/Calls";

function OpenChat({isAlternateView,isAddFriend}) {
  return (
    <div
      style={{
        height: "470px",
        width: "890px",
        border: "1px solid lightgrey",
        marginLeft: "10px",
        borderRadius: "8px",
        marginTop:'12px'
      }}
    >
      <div >
       <ChatHeader/>
       {isAddFriend?
       (
        <AddLogo/>

       ):isAlternateView ? 
       (<AddLogo />) :( <ChatMessages />)}
        <ChatInputBar />
      </div>
      
    </div>
  );
}

export default OpenChat;
