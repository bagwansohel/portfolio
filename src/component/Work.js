import React from 'react';
import Ph from "../images/ph-1.png"

function Work() {
  return (
    <section className="works" id="Work">
      <div className="container">
        <h1 className="section-heading">
          <span>Our</span>Works
        </h1>
        <p>We Provide high standard clean website for your Business solution</p>
        <div className="card-wrapper">
          <div className="card">
            <div className="overlay">
              <span>Category</span>
              <a href=" ">Web Development</a>
            </div>
            <img src={Ph} alt="" />
          </div>
          <div className="card">
            <div className="overlay">
              <span>Category</span>
              <a href=" ">Web Development</a>
            </div>
            <img src={Ph} alt="" />
          </div>
          <div className="card">
            <div className="overlay">
              <span>Category</span>
              <a href=" ">Web Development</a>
            </div>
            <img src={Ph} alt="" />
          </div>
          <div className="card">
            <div class="overlay">
              <span>Category</span>
              <a href=" ">Web Development</a>
            </div>
            <img src={Ph} alt="" />
          </div>
          <div className="card">
            <div className="overlay">
              <span>Category</span>
              <a href=" ">Web Development</a>
            </div>
            <img src={Ph} alt="" />
          </div>
          <div className="card">
            <div className="overlay">
              <span>Category</span>
              <a href=" ">Web Development</a>
            </div>
            <img src={Ph} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Work;
