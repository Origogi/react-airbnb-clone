import { Search } from "@mui/icons-material";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__icon"
        src="https://i.pinimg.com/564x/c6/49/8b/c6498bc6f8fe8336b8aa1b5232cc36e8.jpg"
      />
      <div className="header__center">
        <input type="text" />
        <Search />
      </div>
    </div>
  );
}

export default Header;
