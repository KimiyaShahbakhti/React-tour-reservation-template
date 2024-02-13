import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import Button from "../button/button";
import Signup from "../pages/signup";
const Navbar = () => {
  const links = ["صفحه اصلی", "تور", "گردشگری"];
  const [active, setActive] = useState(null);

  const towhere = (link) => {
    if (link === "صفحه اصلی") {
      return "/";
    } else if (link === "تور") {
      return "/tour";
    } else if (link === "گردشگری") {
      return "/tourism";
    }
  };

  return (
    <React.Fragment>
      <ul className="nav nav-tabs justify-content-start">
        <li className="nav-item">
          <a className="navbar-brand">
            <i className="fab fa-typo3"></i> Travel
          </a>
        </li>
        {links.map((link) => (
          <li className="nav-item">
            <Link
              to={towhere(link)}
              className={`nav-link ${active == link && "active"}`}
              onClick={() => setActive(link)}
            >
              {link}
            </Link>
          </li>
        ))}
        <li className="nav-item logsign-btn">
          {
            <Button
              btnheight="btn-h40"
              btnsize="btn-100"
              to="/signup"
              btnstyle="btn-trs"
            >
              ورود / ثبت نام <i className="fa fa-user"></i>
            </Button>
          }
        </li>
      </ul>

      <nav className="nav-responsive navbar">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">
            <i className="fab fa-typo3"></i> Travel
          </a>
          <div
            className="offcanvas offcanvas-end"
            tabindex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <a className="navbar-brand" href="#">
                <i className="fab fa-typo3"></i> Travel
              </a>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav flex-grow-1 pe-0">
                {links.map((link) => (
                  <li className="nav-item">
                    <Link to={towhere(link)} className="nav-link">
                      {link}
                    </Link>
                  </li>
                ))}
                <li className="nav-item">
                  {
                    <Button
                      btnsize="btn-100"
                      to="/signup"
                      btnstyle="btn-trs"
                      btnheight="btn-h70"
                    >
                      ورود / ثبت نام <i className="fa fa-user"></i>
                    </Button>
                  }
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

    </React.Fragment>
  );
};
export default Navbar;
