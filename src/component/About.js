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
          <h3>Hello! I am Sohel</h3>
          <h4>ReactJs|ReactNative|Web Developement</h4>
          <p>My passion is making ideas come to life ,be it working solo, as part of a team or leading a team of fellow developers.</p>
          <p>I am fresher with working as Freelancer in Oort technology.</p>
          <p>My go-to technologies are ReactJS and React Native, and I have completed a wide range of projects using them.
          Those are not the only two libraries/frameworks I'm familiar with though, and I'm always happy to discuss my client's needs
            and find the best solutions for them.</p>
          <p>I consider myself creative and hardworking, as my stats show. If you liked my profile so far, drop me a message and we'll discuss how I can be useful to your project.</p>
          <div className="social">
            <a href="https://www.facebook.com/">
              <img src={Facebook} alt="Facebook" />
            </a>
            <a href="https://twitter.com/?lang=en">
              <img src={Twitteer} alt="Twitteer" />
            </a>
            <a href="https://www.whatsapp.com/?lang=en">
              <img src={Whatapp} alt="Whatapp" />
            </a>
            <a href="https://www.youtube.com/">
              <img src={Youtube} alt="Youtube" />
            </a>
            <a href="https://www.instagram.com/">
              <img src={Instagram} alt="Instagram"/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
