import React from 'react';
import man from "../images/man.png"
function Home()
{
  return<React.Fragment>
  <div className="container">
<nav  id="main-nav" className="flex items-center justify-between">
          <div className="left flex items-center">
             <div className="branding">
           <img src={logo} alt="Logo"/>
          </div>
          <ul>
            <li ><Link  to="/" smooth={true} className="link">Home</Link></li> 
             <li><Link to="/About" smooth={true} className="link">About</Link></li>
             <li><Link to="/Services" smooth={true} className="link">Services</Link></li>
             <li><Link to="/Work" smooth={true} className="link">Pages</Link></li>
             <li><Link to="/Pages" smooth={true} className="link">Blog</Link></li>
          </ul> 
          </div>  
          <div className="right">
          <button className="btn btn-primary">Contact</button>
        </div>
    </nav>
</div>
    </React.Fragment>

}
export default Home;
