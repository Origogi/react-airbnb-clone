import { Button } from "@mui/material";
import React from "react";
import "./SearchPage.css";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays · 25 august to 30 august · 2 guest</p>

        <h1>Stays nearby</h1>

        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
    </div>
  );
}

export default SearchPage;
