import React from 'react';
import Artical from "../images/article-ph-2.png"
import Artical1 from "../images/ph-2.png"
import Artical2 from "../images/ph-3.png"
function Blog() {
  return (
    <section className="blog" id="Blog">
      <div className="container">
        <h1 className="section-heading">
          <span>Our</span>Blog
        </h1>
        <p>
          we petovide high standard clean website for your Business solution
        </p>

        <div className="card-wrapper">
          <div className="card">
            <div className="img-wrapper">
              <img src={Artical} alt="" />
            </div>
            <div className="card-content">
              <a href=" ">
                <h1>Software development</h1>
              </a>
              <span>may 20 2021</span>
              <p>Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components.
              Software development is a process of writing and maintaining the source code, but in a broader sense, it includes all that is involved between the conception of the desired software through to the final manifestation of the software, sometimes in a planned and structured process.
              Therefore, software development may include research, new development, prototyping, modification, reuse, re-engineering, maintenance, or any other activities that result in software products.

</p>
              <a href="https://en.wikipedia.org/wiki/Software_development" className="read-more">
                Read More
              </a>
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={Artical1} alt="" />
            </div>
            <div className="card-content">
              <a href=" ">
                <h1>Web Developement</h1>
              </a>
              <span>may 20 2021</span>
              <p>A web application is application software that runs on a web server, unlike computer-based software programs that are run locally on the operating system (OS) of the device.
              Web applications are accessed by the user through a web browser with an active network connection.
              These applications are programmed using a client–server modeled structure—the user ("client") is provided services through an off-site server that is hosted by a third-party.
              Examples of commonly-used web applications include: web-mail, online retail sales, online banking, and online auctions.
              </p>
              <a href="https://en.wikipedia.org/wiki/Web_application" className="read-more">
                Read More
              </a>
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={Artical2} alt="" />
            </div>
            <div className="card-content">
              <a href=" ">
                <h1>Mobile Application Development</h1>
              </a>
              <span>may 20 2021</span>
              <p>A mobile application, also referred to as a mobile app or simply an app, is a computer program or software application designed to run on a mobile device such as a phone, tablet, or watch.
              Apps were originally intended for productivity assistance such as email, calendar, and contact databases, but the public demand for apps caused rapid expansion into other areas such as mobile games, factory automation, GPS and location-based services, order-tracking, and ticket purchases, so that there are now millions of apps available.
              Apps are generally downloaded from application distribution platforms which are operated by the owner of the mobile operating system, such as the App Store (iOS) or Google Play Store.
              
              </p>
              <a href="https://en.wikipedia.org/wiki/Mobile_app" className="read-more">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blog;
