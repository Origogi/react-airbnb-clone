import React from "react";
import "./Home.css";
import Banner from "./Banner";
import Card from "./Card";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://www.traveldailymedia.com/assets/2021/11/airbnb-1-min.jpeg"
          title="Entire"
          description="Comfortable private places, with room for friends or family."
        />
        <Card
          src="https://www.traveldailymedia.com/assets/2021/11/airbnb-1-min.jpeg"
          title="Entire"
          description="Comfortable private places, with room for friends or family."
        />
        <Card
          src="https://www.traveldailymedia.com/assets/2021/11/airbnb-1-min.jpeg"
          title="Entire"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
      <div className="home__section">
        <Card
          src="https://www.traveldailymedia.com/assets/2021/11/airbnb-1-min.jpeg"
          title="Entire"
          description="Comfortable private places, with room for friends or family."
        />
        <Card
          src="https://www.traveldailymedia.com/assets/2021/11/airbnb-1-min.jpeg"
          title="Entire"
          description="Comfortable private places, with room for friends or family."
        />
        <Card
          src="https://www.traveldailymedia.com/assets/2021/11/airbnb-1-min.jpeg"
          title="Entire"
          description="Comfortable private places, with room for friends or family."
        />
      </div>
    </div>
  );
}

export default Home;
