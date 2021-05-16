import React from 'react';
import Gmail from "../images/gmail.png"
import Phone from "../images/call.png"
import Map from "../images/map.png"
import axios from "axios"
class Contact extends React.Component {
  constructor() {
    super();
    this.state = {
    
      name:[],
      email:[],
      msg: [],
      subject:[]
    
  };
    this.Change = this.Change.bind(this);
    this.Submit = this.Submit.bind(this);
  }

  Change(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }
 Submit(event) {
   event.preventDefault();
    axios.post(`http://localhost:3000/Contacts`,this.state)
      .then(res => {
   
      alert("Your Response is Submitted...!")
      })
      .then(error => {
        console.log(error)
      })
  }

  render() {
    return <section className="contact" id="Contact">
      <div className="container">
        <h1 className="section-heading">
          Contact <span>Us</span>
        </h1>
        <div className="card-wrapper">
          <div className="card">
            <img src={Phone} alt="phone icon" />
            <h3>call us on</h3>
            <h6>7972649002</h6>
          </div>
          <div className="card">
            <img src={Gmail} alt="mail icon" />
            <h3>G-mail</h3>
            <h6>bagwansohel50@gmail.com</h6>
          </div>
          <div className="card">
            <img src={Map} alt="map icon" />
            <h3>visit office</h3>
            <address>Uttamnagar Pune 411023</address>
          </div>
        </div>
        <form onSubmit={this.Submit}>
          <div className="input-wrap">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              onChange={this.Change}
              value={this.state.name}
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={this.state.email}
              onChange={this.Change}
            />
          </div>
          <div className="input-wrap-2">
            <input
              type="text"
              name="subject"
              placeholder="Enter Your Subject ...."
              onChange={this.Change}
              value={this.state.subject}
            />
            <textarea
              name="msg"
              id=""
              cols={30}
              rows={10}
              placeholder="Enter Your  message"
              onChange={this.Change}
              value={this.state.msg}
            />
          </div>
          <div className="btn-wrapper">
            <input
              type="submit"
              className="btn btn-primary"
              value="Send Message"
            />
          </div>
        </form>
      </div>
    </section>

  }
}
export default Contact;
