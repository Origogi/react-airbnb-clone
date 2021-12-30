import { Button } from "@mui/material";
import React, { useState } from "react";
import "./Banner.css";

function Banner() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div className="banner">
      <div className="banner__search">
        {showSearch && <h1>SHOW DATE PICKER</h1>}
        <Button variant="outlined" className="banner__searchButton" onClick= {
          () => setShowSearch(!showSearch)
        }>
          Search Dates
        </Button>
      </div>
      <div className="banner__info">
        <h1>Get out and stretch your imagination</h1>
        <h5>
          Plan an different kind of gateway to uncover the hidden gems near you.
        </h5>
        <Button variant="outlined">Explore Nearby</Button>
      </div>
    </div>
  );
}

export default Banner;
