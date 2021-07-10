import React from 'react';
import './styles.css';

function Header () {
    return <section className="title">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand navbar-titletext" href="/">Nordic spey shop</a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#readmore">Read more</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#cart">My Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
}

export default Header;