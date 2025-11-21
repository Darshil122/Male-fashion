import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import payment from "../img/payment.png";
import logo from "../img/footer-logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="footer__about">
              <div className="footer__logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
              <p>
                The customer is at the heart of our unique business model, which
                includes design.
              </p>
              <Link to="/">
                <img src={payment} alt="" />
              </Link>
            </div>
          </div>
          <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
            <div className="footer__widget">
              <h6>Shopping</h6>
              <ul>
                <li>
                  <Link to="/">Clothing Store</Link>
                </li>
                <li>
                  <Link to="/">Trending Shoes</Link>
                </li>
                <li>
                  <Link to="/">Accessories</Link>
                </li>
                <li>
                  <Link to="/">Sale</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 col-sm-6">
            <div className="footer__widget">
              <h6>Menu</h6>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/category/all">Shop</Link>
                </li>
                <li>
                  <Link to="/blogs">Blog</Link>
                </li>
                <li>
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
            <div className="footer__widget">
              {/* <h6>NewLetter</h6> */}
              <div className="footer__newslatter">
                <p>
                  Be the first to know about new arrivals, look books, sales &
                  promos!
                </p>
                <form action="#">
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="Your email"
                    name="email"
                    id="email"
                    className="px-2"
                  />
                  <button type="submit">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 text-center">
            <div className="footer__copyright__text">
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
              <p>
                Copyright © 2025 All rights reserved
                {/* <FontAwesomeIcon icon={faHeart} /> */}
              </p>
              {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
