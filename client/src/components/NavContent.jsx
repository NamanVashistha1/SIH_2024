import React from "react";
import { Link, useNavigate } from "react-router-dom";
import NavLinksContainer from "./NavLinksContainer";
import NavPrompt from "./NavPrompt";
import NewChat from "./NewChat";

const NavContent = ({ chatLog, setChatLog, setShowMenu }) => {
  let navigate = useNavigate();

  return (
    <>
      <div
      className="sideMenuButton"
      onClick={() => {
        // console.log("UploadPAge")
        navigate('/UploadFile');
      }}
    >
      <span></span>
      Upload File
    </div>
    <div
      className="sideMenuButton"
      onClick={() => {
        // console.log("UploadPAge")
        navigate('/FAQs');
      }}
    >
      <span></span>
      Frequently Asked Questions
    </div>
      <NewChat setChatLog={setChatLog} setShowMenu={setShowMenu} />

      <div className="navPromptWrapper">
        {chatLog.map(
          (chat, idx) =>
            chat.botMessage && (
              <NavPrompt chatPrompt={chat.chatPrompt} key={idx} />
            )
        )}
      </div>
      <NavLinksContainer chatLog={chatLog} setChatLog={setChatLog} />
    </>
  );
};

export default NavContent;
