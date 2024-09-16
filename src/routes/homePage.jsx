import React from "react";
import "../routes/homePage.scss";
import SearchBar from "../Compnents/searchBar/SearchBar";
function HomePage() {
  return (
    <div className="homepage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title"> Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
            vitae, sint excepturi quibusdam esse inventore doloribus distinctio
            non! Nihil ex eligendi enim aperiam, esse laborum maiores est iste
            molestias consequuntur!
          </p>
          <SearchBar />
          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience</h2>
            </div>
            <div className="box">
              <h1>200</h1>
              <h2>award gained</h2>
            </div>
            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
