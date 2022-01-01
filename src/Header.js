import { ExpandMore, Language, Search } from "@mui/icons-material";
import React from "react";
import "./Header.css";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__icon"
          src="https://i.pinimg.com/564x/c6/49/8b/c6498bc6f8fe8336b8aa1b5232cc36e8.jpg"
        />
      </Link>

      <div className="header__center">
        <input type="text" />
        <Search />
      </div>

      <div className="header__right">
        <p>Become a host</p>
        <Language />
        <ExpandMore />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
