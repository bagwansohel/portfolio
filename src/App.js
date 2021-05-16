import React from 'react';
import Home from './component/Home.js';
import About from './component/About.js';
import Services from './component/Services.js';
import Freelancer from "./component/Freelancer.js"
import Work from "./component/Work.js"
import Blog from "./component/Blog.js"
import Contact from "./component/Contact.js"
import Footer from "./component/Footer.js"
import { HashLink as Link } from "react-router-hash-link"
import logo from "./images/logo.svg"
import { Route, Switch } from "react-router-dom"
import './style.css';


export default function App() {
  return <>
    <header>
      <div className="container">
        <nav id="main-nav" className="flex items-center justify-between">
          <div className="left flex items-center">
            <div className="branding">
              <img src={logo} alt="Logo" />
            </div>
            <ul>
              <li><Link smooth to="#Home" className="link">Home</Link></li>
              <li ><Link smooth to="#About" className="link">About</Link></li>
              <li ><Link smooth to="#Services" className="link">Services</Link></li>
              <li ><Link smooth to="#Work" className="link">Work</Link></li>
              <li ><Link smooth to="#Blog" className="link">Blog</Link></li>

            </ul>

          </div>
          <div className="right">
            <Link smooth to="#Contact"><button className="btn btn-primary">Contact</button></Link>
          </div>
        </nav>
      </div>
    </header>

    <div>
      <Home />
      <About />
      <Services />
      <Freelancer />
      <Work />
      <Blog />
      <Contact />
      <Footer />

      <Switch>
        <Route exact path="/Home" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Services" component={Services} />
        <Route exact path="/Freelancer" component={Freelancer} />
        <Route exact path="/Work" component={Work} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
    </div>
  </>
}
