import React from 'react';
import Man from "../images/man-2.png"
import Facebook from "../images/Facebook.png"
import Instagram from "../images/Instagram.png"
import Twitteer from "../images/Twitteer.png"
import Whatapp from "../images/Whatapp.png"
import Youtube from "../images/Youtube.png"
function About() {
  return (
    <section className="about" id="About">
      <div className="container flex items-center ">
        <div className="flex-1">
          <img className="about-me-img" src={Man} alt="Man" />
        </div>
        <div className="flex-1">
          <h1>
            About<span>Me</span>
          </h1>
          <h3>Hello! Your Name</h3>
          <p>Description about your self</p>
          <div className="social">
            <a href=" ">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href=" ">
              <img src={Twitteer} alt="Twitteer" />
            </a>
            <a href=" ">
              <img src={Whatapp} alt="Whatapp" />
            </a>
            <a href=" ">
              <img src={Youtube} alt="Youtube" />
            </a>
            <a href=" ">
              <img src={Instagram} alt="Instagram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
