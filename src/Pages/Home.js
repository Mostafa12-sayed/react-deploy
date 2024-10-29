import React from "react";
import headerImage from "../Assets/doctor7.png";
import sqauer from "../Assets/animated/square.png";
import triangle from "../Assets/animated/triangle.png";
import waveOrange from "../Assets/animated/wave1.png";
import plus from "../Assets/animated/plus.png";

import "./Styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faSquare } from "@fortawesome/free-solid-svg-icons";
import Body from "../Components/Body/Body";
function Home() {
  return (
    <>
      <header>
        <div className="header-bg">
          <div className="container">
            <div className="row">
              <div className="col-ml-6 col-ms-6 col-md-6 col-lg-6">
                <h5 className="title-ext text-primary">
                  We Provide All Health Care Solution
                </h5>
                <h2>Protect Your Health And Take Care To Of Your Health</h2>
                <button>
                  <a href="/about">Learn More</a>
                </button>
              </div>

              <div className="col-ml-6 col-ms-6 col-md-6 col-lg-6 header-image">
                <div className="animated-wave-orange">
                  <img
                    src={waveOrange}
                    alt="wave-orange"
                    className="wave-orange"
                  />
                </div>
                <img src={headerImage} alt="logo" />
              </div>
              <div className="animated-square">
                <img src={sqauer} alt="square" className="square" />
              </div>
              <div className="animated-triangle">
                <img src={triangle} alt="triangle" className="triangle" />
              </div>
              <div className="animated-plus">
                <img src={plus} alt="plus" className="plus" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <Body />
    </>
  );
}
export default Home;
