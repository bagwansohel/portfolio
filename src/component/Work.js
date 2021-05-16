import React from 'react';
import Fruits from "../images/fruits.jpg"
import Phishing from "../images/phishing.jpg"
import Portfolio from "../images/portfolio.jpg"
import Report from "../Resume/Report.pdf"
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
              <a href={Report}>Phishing Attack Project</a>
            </div>
            <img src={Phishing} alt="Phishing" />
          </div>
          <div className="card">
            <div className="overlay">
              <span>Category</span>
              <a href="https://github.com/bagwansohel/fruits-vegitables.git">Fruits&Vegitables Project</a>
            </div>
            <img src={Fruits} alt="Fruits" />
          </div>
          <div className="card">
            <div className="overlay">
              <span>Category</span>
              <a href="https://github.com/bagwansohel/portfolio.git">Protfolio Project</a>
            </div>
            <img src={Portfolio} alt="Portfolio" />
          </div>
        </div>

      </div>
    </section>
  );
}
export default Work;
