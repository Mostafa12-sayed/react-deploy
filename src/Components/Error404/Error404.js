import React from "react";
import Banner from "../Banner/Banner";
import { Button } from "react-bootstrap";
import "./Error404.css";
function Error404() {
  return (
    <>
      <Banner title={"Page Not Found"} />
      <section className="error-404">
        <div className="container">
          <div className="inner-container">
            <h1 className="error-title">
              4 <span></span> 4
            </h1>
            <h3 className="error-message">
              The Page you were looking for, couldn't be found.
            </h3>
            <p>
              The page you are looking for might have been removed, had its name
              changed, or is temporarily unavailable.
            </p>
            <div className="btn-container">
              <button className="btn btn-primary"> Back</button>

              <button className="btn btn-primary"> Back to Homepage</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Error404;
