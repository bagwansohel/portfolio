import React from 'react';

function About() {
  return (
    <section class="about">
      <div class="container flex items-center ">
        <div class="flex-1">
          <img class="about-me-img" src="./images/man-2.png" alt="" />
        </div>
        <div class="flex-1">
          <h1>
            About<span>Me</span>
          </h1>
          <h3>Hello! Your Name</h3>
          <p>Description about your self</p>
          <div class="social">
            <a href="#">
              <img src="./images/facebook1.png" alt="facebook" />
            </a>
            <a href="#">
              <img src="./images/twitter.png" alt="twitter" />
            </a>
            <a href="#">
              <img src="./images/pintrest.png" alt="pintrest" />
            </a>
            <a href="#">
              <img src="./images/instagram.jpg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
