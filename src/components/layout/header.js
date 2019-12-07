import React from "react";

function Header(props) {
  // console.log(this.props.countSoFar);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Memory Game
        </a>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link">Count:</a>
            </li>
            <li className="nav-item">
              <a className="nav-link">Highest Count:</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
