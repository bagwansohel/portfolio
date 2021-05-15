import React from 'react';
import Lady from "../images/lady.png"

function Freelancer() {
  return (
    <>
      <section className="freelancer">
        <h1>I am Available from Freelancer </h1>
        <p>we provide what ever you want paste here</p>
        <button className="btn btn-primary">DOWNLOAD CV</button>
      </section>

      <section className="review">
        <div className="container">
          <h1 className="section-heading">
            <span>Our</span>Client
          </h1>
          <p>Some info............</p>
          <div className="slider">
            <div className="slide">
              <img src={Lady} alt="" />
              <p>Some info related company</p>
              <span>John Doel,company ABC</span>
            </div>
            </div>
        </div>
      </section>
    </>
  );
}
export default Freelancer;
