import React from 'react';

import Resume from "../Resume/Resume.pdf"
import {Link} from "react-router-dom"

function Freelancer() {
  return (
    <>
      <section className="freelancer">
        <h1>I am Available from Freelancer </h1>
        <p>we provide building everything from small business sites to rich interactive web apps</p>
        <Link to={Resume} target="_blank" download><button className="btn btn-primary">DOWNLOAD CV</button></Link>
      </section>
    {/*
      <section className="review">
        <div className="container">
          <h1 className="section-heading">
            <span>Our</span>Client
          </h1>
          <p>Some info............</p>
          <div className="slider">
            <div className="slide">
              <img src={} alt="" />
              <p>Some info related company</p>
              <span>John Doel,company ABC</span>
            </div>
            </div>
        </div>
      </section> */}
    </>
  );
}
export default Freelancer;
