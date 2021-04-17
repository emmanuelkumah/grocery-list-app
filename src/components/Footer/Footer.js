import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
// import { Button } from "../../Button/Button";
import { GiShoppingBag } from "react-icons/gi";
import { BiMailSend, BiMapPin } from "react-icons/bi";
import { FiPhoneCall } from "react-icons/fi";

function Footer() {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-left">
          <h3>
            <GiShoppingBag /> Grocery Bag
          </h3>

          <div className="footer-links">
            <Link to="/" className="footer-menu">
              Home
            </Link>
            <Link to="/about" className="footer-menu">
              About
            </Link>
            <Link to="/why-us" className="footer-menu">
              Why Choose us
            </Link>
          </div>

          <p className="footer-company-name">
            Grocery Bag © 2021. All rights reserved
          </p>
        </div>

        <div className="footer-center">
          <h3>Locate Us</h3>
          <div>
            <BiMapPin className="footer-contact-icons" />

            <p>18th Nii Kpapka Badu Street, Accra</p>
          </div>

          <div>
            <FiPhoneCall className="footer-contact-icons" />
            <p>+233 23422342</p>
          </div>

          <div>
            <BiMailSend className="footer-contact-icons" />
            <p>
              <Link to="mailto:support@grocerybag.com">
                support@grocerybag.com
              </Link>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p class="footer-company-about">
            <span>About Grocery Bag</span>
            Be on top of your grocery list and enjoy a convenient shopping
            experience
          </p>

          <div className="footer-icons">
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
            <Link
              className="social-icon-link"
              to={
                "//www.youtube.com/channel/UCsKsymTY_4BYR-wytLjex7A?view_as=subscriber"
              }
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              className="social-icon-link"
              to="/"
              target="_blank"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
