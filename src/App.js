import React from "react";
import { useState } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Subheader from "./component/Subheader";
import ChatComponent from "./component/Chatcomponent";
import OpenChat from "./component/OpenChat";
import Sidebar from "./component/Sidebar";
import ManageHeader from "./ManageRequest/ManageHeader";
import RequestBox from "./ManageRequest/RequestBox";
import AddSubHeader from "./AddFriendcomponent/AddSubHeader";
import Chat from "./AddFriendcomponent/Chat";
import VedioChat from "./VedioComponent/VedioChat";
import CallHeader from "./VedioComponent/CallHeader";

function App() {
  const [isAlternateView, setIsAlternateView] = useState(false);
  const[isAddFriend,setIsAddFriend] =useState(false);
  
  const handleAddFriend = () =>{
    setIsAddFriend(!isAddFriend);
    setIsAlternateView(false);
    console.log("button is clicked")
  }

  const handleToggleView = () => {
    setIsAlternateView(!isAlternateView);
    setIsAddFriend(false);
    console.log("Toggle button clicked");
  };
  const handleHome =()=>{
    setIsAlternateView(false);
    setIsAddFriend(false);
    console.log("button is clicked")
    }
  return (
    <div>
      <Navbar />
      {isAddFriend?(
        <AddSubHeader onAddFriend={handleAddFriend} onLogoClick={handleHome} onButtonClick={handleToggleView}/>

      ):
      isAlternateView ? (
        <ManageHeader onButtonClick={handleToggleView} onAddFriend={handleAddFriend} onLogoClick={handleHome} />
      ) : (
        <Subheader onButtonClick={handleToggleView} onClick ={handleHome} onLogoClick={handleHome} />
      )}
      {/* <CallHeader/> */}
      {/* <AddSubHeader/> */}
      <hr
        className="my-0"
        style={{
          // marginTop:"5px",
          border: "none",
          borderTop: "1px solid #d3d3d3", // Light grey color for the line
          paddingTop: "0px", // Remove any default margin
        }}
      />

      <div className="d-flex ">
        <div className="position-sticky" style={{ top: "0" }}>
          <Sidebar />
        </div>
        <div className=" col-lg-3 col-md-6 col-10">
          {isAddFriend?
          (
            <Chat/>
          ):
          isAlternateView ? 
          (<RequestBox/> )
          : (<ChatComponent />)
          } 
        </div>
        <div className=" col-lg-6">
        <OpenChat isAlternateView={isAlternateView} isAddFriend={isAddFriend}/>
        </div> 
        {/* <VedioChat/> */}
      </div>
    </div>
  );
}

export default App;
