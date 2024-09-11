import React from "react";
import "../routes/homePage.scss";
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
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
