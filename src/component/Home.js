import React from 'react';

import man from "../images/man.png"

function Home() {
  return (
    <header id="Home">
      <div className="container">
        <div className="hero flex items-center justify-between">
          <div className="left flex-1 justify-center">
            <img src={man} alt="Hero" />
          </div>
          <div className="right flex-1">
            <h6>Your name</h6>
            <h1>
              I'm a Creative <span>Designer</span>
            </h1>
            <p>Add Description</p>
            <div>
              <button className="btn btn-secondary">DOWNLOAD CV</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Home;
