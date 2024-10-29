import React, { Fragment } from "react";
import "./footer.css";
import footer1 from "../../Assets/footer1.png";
import footer2 from "../../Assets/footer2.jpg";

import footer3 from "../../Assets/footer3.jpg";
import logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import facebook from "../../Assets/facebook.png";
import twitter from "../../Assets/twitter.png";
import instgrame from "../../Assets/instgrame.png";
import linkedin from "../../Assets/linkedin.png";

function Footer() {
  return (
    <Fragment>
      {/* <div className="background-image">
        <img src={footer1} alt="logo" className="background-image" />
      </div> */}
      <footer className="footer-area">
        <div className="footer-bg">
          <div className="container ">
            <div className="row">
              <div className="col-md-3 col-sm-6 footer-content ">
                <img src={logo} alt="logo" className="logo" />
                <p>
                  Lorem ipsum is dolor sit amet, csectetur adipiscing elit,
                  dolore smod tempor incididunt ut labore et.
                </p>

                <div className="footer-contact">
                  <div className="phone-icon">
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                  </div>
                  <div className="contact-info">
                    <h6>Contact Us:</h6>
                    <h4>+201022074789</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 footer-quick-links">
                <h3>Quick Links</h3>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Blogs</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-quick-links ">
                <h3>Our Service</h3>
                <ul>
                  <li>
                    <a href="#">Dental Care</a>
                  </li>
                  <li>
                    <a href="#">Cardiac Clinic</a>
                  </li>
                  <li>
                    <a href="#">Massege Therapy</a>
                  </li>
                  <li>
                    <a href="#">Cardiology</a>
                  </li>
                  <li>
                    <a href="#">Printing Services</a>
                  </li>
                  <li>
                    <a href="#">Ambulance Service</a>
                  </li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6 footer-quick-links">
                <h3>Subcribe</h3>
                <form>
                  <input type="text" placeholder="Enter your email" />
                  <button type="submit">Subscribe Now</button>
                </form>
                <div className="social-icons">
                  <ul>
                    <li>
                      {" "}
                      <a href="#home">
                        <img src={facebook} alt="logo" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#home">
                        <img src={twitter} alt="logo" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#home">
                        <img src={instgrame} alt="logo" />
                      </a>
                    </li>
                    <li>
                      {" "}
                      <a href="#home">
                        <img src={linkedin} alt="logo" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="copy-right">
              <hr />
              <p className="text-center">
                Copyright © 2024 Design & Developed by{" "}
                <a href="#">Mostafa Sayed</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
export default Footer;
