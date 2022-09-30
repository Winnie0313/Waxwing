import React from "react";

import { BsFacebook, BsTwitter, BsGithub } from "react-icons/bs";

function Footer() {
  return (
    <div className="fixed-bottom ftr">
      <footer className="footer mt-auto py-4 bg-dark text-white">
        <div>
          <a href="https://www.facebook.com/" className="me-5 text-reset">
            <BsFacebook size="2em" color="#4267B1" />
          </a>
          <a href="https://twitter.com/home" className="me-5 text-reset">
            <BsTwitter size="2em" color="#00acee" />
          </a>
          <a href="https://github.com/" className="me-2 text-reset">
            <BsGithub size="2em" />
          </a>
        </div>
        <div className="text-center p-3">© 2022 Copyright</div>
      </footer>
    </div>
  );
}

export default Footer;
