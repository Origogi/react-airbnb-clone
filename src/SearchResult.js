import React from "react";
import "./SearchResult.css";
import { FavoriteBorder } from "@mui/icons-material";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorder className="searchResult__heart" />
    </div>
  );
}

export default SearchResult;
