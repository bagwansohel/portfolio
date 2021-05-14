import React from 'react';
import {} from './Home.css';
function Home() {
  return (
    <header>
      <div class="container">
        <nav id="main-nav" class="flex items-center justify-between">
          <div class="left flex items-center">
            <div class="branding">
              <img src="./images/logo.svg" />
            </div>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Pages</a>
            <a href="#">Blog</a>
          </div>
          <div class="right">
            <button class="btn btn-primary">Contact</button>
          </div>
        </nav>
        <div class="hero flex items-center justify-between">
          <div class="left flex-1 justify-center">
            <img src="./images/man.png" alt="Hero image" />
          </div>
          <div class="right flex-1">
            <h6>Your name</h6>
            <h1>
              I'm a Creative <span>Designer</span>
            </h1>
            <p>Add Description</p>
            <div>
              <button class="btn btn-secondary">DOWNLOAD CV</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Home;
