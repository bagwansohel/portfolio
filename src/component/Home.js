import React from 'react';
import {Link} from "react-router-dom"
import man from "../images/man.png"
import Resume from "../Resume/Resume.pdf"
function Home() {
  return (
    <header id="Home">
      <div className="container">
        <div className="hero flex items-center justify-between">
          <div className="left flex-1 justify-center">
            <img src={man} alt="Hero" />
          </div>
          <div className="right flex-1">
            <h6>Sohel Bagwan</h6>
            <h1>
              I'm a Creative <span>Designer</span>
            </h1>
            <p>I am a web developer,I enjoy building everything from small business sites to rich interactive web apps.If you are a business seeking a web presence or an employer looking to hire.you can get in touch with me here. </p>
            <div>
            <Link to={Resume} target="_blank" download><button className="btn btn-secondary">DOWNLOAD CV</button></Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Home;
