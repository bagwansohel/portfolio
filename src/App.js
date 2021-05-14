import React from "react";
import "./style.css";
import Home from "./component/Home"
import About from "./component/About"
import Services from "./component/Services"
import Work from "./component/Work"
import Pages from "./component/Pages"
import{HashLink as Link} from "react-router-hash-link"
import {Route,Switch} from "react-router-dom"


class App extends React.Component{

render()
{
return<React.Fragment>
<header>
<Home/>
</header>
<section class="about">
<About/>
</section>
<section class="services">
<Services/>
<section>

<Switch>
<Route path="/" ><Home/></Route>
<Route path="/About" component={About}><About/></Route>
<Route path="/Services" component={Services}><Services/></Route>
<Route path="/Work" component={Work}><Work/></Route>
<Route path="/Pages" component={Pages}><Pages/></Route>
</Switch>
</React.Fragment>
}
}
export default App;