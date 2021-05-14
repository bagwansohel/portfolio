import React from 'react';

function Freelancer() {
  return (
    <>
      <section class="freelancer">
        <h1>I am Available from Freelancer </h1>
        <p>we provide what ever you want paste here</p>
        <button class="btn btn-primary">DOWNLOAD CV</button>
      </section>

      <section class="review">
        <div class="container">
          <h1 class="section-heading">
            <span>Our</span>Client
          </h1>
          <p>Some info............</p>
          <div class="slider">
            <div class="slide">
              <img src="./images/lady.png" alt="" />
              <p>Some info related company</p>
              <span>John Doel,company ABC</span>
            </div>

            <div class="slide">
              <img src="./images/lady.png" alt="" />
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
