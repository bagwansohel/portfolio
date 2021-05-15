import React from 'react';
import Artical from "../images/article-ph-1.png"

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
                <h1>OCCChhdhd</h1>
              </a>
              <span>may 12 2017</span>
              <p>Descriptiomhv fgdr grt radth h1yh th</p>
              <a href=" " className="read-more">
                Read More
              </a>
            </div>
          </div>
          <div className="card">
            <div className="img-wrapper">
              <img src={Artical} alt="" />
            </div>
            <div className="card-content">
              <a href=" ">
                <h1>OCCChhdhd</h1>
              </a>
              <span>may 12 2017</span>
              <p>Descriptiomhv fgdr grt radth h1yh th</p>
              <a href=" " class="read-more">
                Read More
              </a>
            </div>
          </div>
          <div className="card">
            <div class="img-wrapper">
              <img src={Artical} alt="" />
            </div>
            <div className="card-content">
              <a href=" ">
                <h1>OCCChhdhd</h1>
              </a>
              <span>may 12 2017</span>
              <p>Descriptiomhv fgdr grt radth h1yh th</p>
              <a href=" " className="read-more">
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
