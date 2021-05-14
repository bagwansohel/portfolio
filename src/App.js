import React from 'react';
import Home from './component/Home.js';
import About from './component/About.js';
import Services from './component/Services.js';
import Freelancer from "./component/Freelancer.js"
import Work from "./component/Work.js"
import Blog from "./component/Blog.js"
import Contact from "./component/Contact.js"
import Footer from "./component/Footer.js"

import './style.css';
import {} from './component/Home.css';

export default function App() {
  return (
    <div>
    <Home/>
      <About/>
      <Services/>
      <Freelancer/>
      <Work/>
      <Blog/>
      <Contact/>
      <Footer/>
    </div>
  );
}
