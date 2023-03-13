import React from "react";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg justify-content-end nav navbar navbar-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://i.gyazo.com/de2316a0a3cbb466d62f95ae95e5e06c.png"
            width={200}
            alt="logo"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav nav-group">
            <a className="nav-link sith links" href="#skills">
              Skills
            </a>
            <a className="nav-link jedi links" href="#portfolio">
              Portfolio
            </a>
            <a className="nav-link sith links" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
