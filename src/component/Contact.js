import React from 'react';
import Facebook from "../images/Facebook.png"

function Contact() {
  return (
    <section className="contact" id="Contact">
      <div className="container">
        <h1 className="section-heading">
          Contact <span>Us</span>
        </h1>
        <p>
          We provide high standared clean website for your business solution
        </p>
        <div className="card-wrapper">
          <div className="card">
          <img src={Facebook} alt="phone icon" />
            <h1>Call Us On</h1>
            <h6>7972649002</h6>
          </div>
          <div className="card">
            <img src={Facebook} alt="mail icon" />
            <h1>eMAIL</h1>
            <h6>7972649002</h6>
          </div>
          <div class="card">
            <img src={Facebook} alt="map icon" />
            <h1>visit office</h1>
            <h6>Address</h6>
          </div>
        </div>
        <form>
          <div className="input-wrap">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div className="input-wrap-2">
            <input type="text" placeholder="Your Subject ...." />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="your message"
            />
          </div>
          <div className="btn-wrapper">
            <button className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact;
