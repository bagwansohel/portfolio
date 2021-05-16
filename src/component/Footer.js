import React from 'react';
import Logo from "../images/logo-2.svg"

function Footer() {
  return (
    <footer>
      <img src={Logo} alt="logo" className="footer-logo" />
      <div className="copyright">Copyright&copy;2021 Creative</div>
    </footer>
  );
}
export default Footer;
