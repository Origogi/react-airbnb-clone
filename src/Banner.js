import { Button } from "@mui/material";
import React, { useState } from "react";
import Search from "./Search";
import "./Banner.css";
import { useNavigate } from "react-router-dom";

function Banner() {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <Search />}
        <Button
          variant="outlined"
          className="banner__searchButton"
          onClick={() => setShowSearch(!showSearch)}
        >
          {showSearch ? "Hide" : " Search Dates"}
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan an different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button onClick={() => navigate("/search")} variant="outlined">
          Explore Nearby
        </Button>
      </div>
    </div>
  );
}

export default Banner;
