import React from "react";
import { Link, useNavigate } from "react-router-dom";

const NavLinks = ({ svg, link, text, setChatLog }) => {
  // let navigate = useNavigate();

  const handleClick = (text) => {
    if (text === "Clear Conversations") setChatLog([]);

    if (text === "Log out") {
      try {
        console.log("Handling Log Out button");
        localStorage.removeItem("authToken");
        window.location.reload();

      } catch (error) {
        console.log("Error happened during sign out", error);
      }
    }
  };

  return (
    <Link
      to={link}
      target={link && "_blank"}
      rel="noreferrer"
      style={{ textDecoration: "none" }}
      onClick={() => handleClick(text)}
    >
      <div className="navPrompt">
        {svg}
        <p>{text}</p>
      </div>
    </Link>
  );
};

export default NavLinks;
