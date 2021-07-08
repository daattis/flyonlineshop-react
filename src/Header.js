import React from 'react';
import './styles.css';

function Header () {
    return <section class="title">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand navbar-titletext" href="">Nordic spey shop</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="#readmore">Read more</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#cart">My Cart</a>
          </li>
        </ul>
      </div>
    </nav>
  </section>
}

export default Header;