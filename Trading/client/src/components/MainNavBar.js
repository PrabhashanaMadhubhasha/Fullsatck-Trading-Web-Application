import React, { Component } from 'react';

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav btn btn-primary" style={{ height: '40px', lineHeight: '8px', margin: '5px' }}>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/home">
                  Home
                </a>
              </li>
            </ul>
            
            <ul className="navbar-nav btn btn">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/MSI/home">
                  MSI
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Asus/home">
                  Asus
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Apple/home">
                  Apple
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/HP/home">
                  HP
                </a>
              </li>
            </ul>

            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/Dell/home">
                  Dell
                </a>
              </li>
            </ul>

            <ul className="navbar-nav ms-auto btn btn-primary" style={{ height: '40px', lineHeight: '8px', margin: '5px' }}>
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="/">
                  LogOut
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
