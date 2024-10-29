import React, { useState } from "react";
import Banner from "../Banner/Banner";
import "./Booking.css";
function Booking({ widthPage }) {
  return (
    <>
      <div className="booking-section">
        <div className="container-sm" style={{ width: widthPage }}>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="booking-form">
                <h2>Book Appointment</h2>
                <form>
                  <div className="form-group">
                    <select className=" form-select form-control">
                      <option selected disabled>
                        Select Appointment
                      </option>
                      <option>One</option>
                      <option>Two</option>
                      <option>Three</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <select className=" form-select form-control">
                      <option selected disabled>
                        Select Doctor
                      </option>
                      <option>Dr. John Doe</option>
                      <option>Dr. Jane Doe</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Phone Number"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="date"
                      className="form-control"
                      placeholder="Enter Date"
                    />
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-primary">
                      Appointment Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;
