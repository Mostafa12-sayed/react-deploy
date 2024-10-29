import React from "react";
import "./Banner.css";
import circal from "../../Assets/circal.png";
import plus2 from "../../Assets/plus-2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Banner({ title }) {
  return (
    <div className="background-image-banner">
      <section className="banner">
        <div className="container">
          <h2>{title}</h2>
          <img src={circal} alt="logo" className="circal-logo" />
          <img src={plus2} alt="logo" className="plus-2-logo" />
          <div className="banner-url">
            <ul>
              <li>
                <Link to="/home">
                  <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>Home
                </Link>
              </li>
              <li>/ {title}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Banner;
