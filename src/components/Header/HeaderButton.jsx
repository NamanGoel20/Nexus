import React from "react";
import { useNavigate } from "react-router-dom";
import { headingSize } from "../../constants.js";

const HeaderButton = ({ children, propClass = "", size = "xl", pageName }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (pageName === "home") {
      pageName = "";
    }
    navigate("/"+pageName);
  }
  return (
    <div className={`text-black-900 font-sourcesanspro ${propClass} ${headingSize[size]}`}>
      <button onClick={handleClick} type="button">
        {children}
      </button>
    </div>
  );
};

export { HeaderButton };
