import React from 'react';

function Contact() {
  return (
    <section class="contact">
      <div class="container">
        <h1 class="section-heading">
          Contact <span>Us</span>
        </h1>
        <p>
          We provide high standared clean website for your business solution
        </p>
        <div class="card-wrapper">
          <div class="card">
            <img src="./images/faceboo.png" alt="phone icon" />
            <h1>Call Us On</h1>
            <h6>7972649002</h6>
          </div>
          <div class="card">
            <img src="./images/message.png" alt="mail icon" />
            <h1>eMAIL</h1>
            <h6>7972649002</h6>
          </div>
          <div class="card">
            <img src="./images/map.png" alt="map icon" />
            <h1>visit office</h1>
            <h6>Address</h6>
          </div>
        </div>
        <form>
          <div class="input-wrap">
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Your Email" />
          </div>
          <div class="input-wrap-2">
            <input type="text" placeholder="Your Subject ...." />
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="your message"
            />
          </div>
          <div class="btn-wrapper">
            <button class="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default Contact;
