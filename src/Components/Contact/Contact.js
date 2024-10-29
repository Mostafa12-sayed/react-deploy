import React from "react";
import "./Contact.css";
import Banner from "../Banner/Banner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import telephone from "../../Assets/animated/telephone.png";
import map from "../../Assets/animated/map.png";
import email from "../../Assets/animated/email.png";
import { useState } from "react";
import {
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapLocationDot,
  faIdCard,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const Modal = ({ message, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-contant">
        <p>{message}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    department: "",
    message: "",
  });
  const [showModal, setShowModal] = useState(false); // To control the pop-up
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const newErrors = {};

    // Check if name is empty
    if (!contact.name) newErrors.name = "Name is required";

    // Check if email is valid
    if (!contact.email) newErrors.email = "Email is required";
    else if (!emailRegex.test(contact.email))
      newErrors.email = "Invalid email format";

    // Check if phone is empty
    if (!contact.phone) newErrors.phone = "Phone number is required";

    // Check if message is empty
    if (!contact.message) newErrors.message = "Message is required";
    if (!contact.department) newErrors.department = "Department is required";

    return newErrors;
  };

  function handellFormSubmit(e) {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);
    console.log(contact);

    // If no validation errors, mark as submitted
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setShowModal(true); // Show the modal pop-up on success

      setContact({
        name: "",
        email: "",
        phone: "",
        department: "",
        message: "",
      });

      // Here you can send `formData` to your server using Fetch or Axios
    } else {
      setSubmitted(false);
    }
  }

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className="contact">
        <Banner title="Contact Us" />
      </div>

      <div className="container">
        <div className="contact__container">
          <div className="row">
            <div className=" col-lg-6 mb-30 ">
              <form onSubmit={handellFormSubmit}>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    value={contact.name}
                    onChange={(e) => {
                      setContact({ ...contact, name: e.target.value });
                    }}
                  />
                  {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    value={contact.email}
                    onChange={(e) => {
                      setContact({ ...contact, email: e.target.value });
                    }}
                    name="email"
                  />
                  {errors.email && (
                    <span className="error">{errors.email}</span>
                  )}
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    value={contact.phone}
                    onChange={(e) => {
                      setContact({ ...contact, phone: e.target.value });
                    }}
                    name="phone"
                  />
                  {errors.phone && (
                    <span className="error">{errors.phone}</span>
                  )}
                </div>

                <div className="form-group col-md-12">
                  <select
                    className="form-control"
                    placeholder="Select Department"
                    onChange={(e) => {
                      setContact({ ...contact, department: e.target.value });
                    }}
                  >
                    <option
                      disabled
                      selected={contact.department === "" ? "selected" : ""}
                    >
                      Select
                    </option>
                    <option
                      value="Department 1"
                      selected={
                        contact.department === "Department 1" ? "selected" : ""
                      }
                    >
                      Department 1
                    </option>
                    <option
                      value="Department 2"
                      selected={
                        contact.department === "Department 1" ? "selected" : ""
                      }
                    >
                      Department 2
                    </option>
                    <option
                      value="Department 3"
                      selected={
                        contact.department === "Department 1" ? "selected" : ""
                      }
                    >
                      Department 3
                    </option>
                  </select>
                  {errors.department && (
                    <span className="error">{errors.department}</span>
                  )}
                </div>

                <div className="form-group col-md-12">
                  <textarea
                    cols={50}
                    className="form-control"
                    placeholder="Message"
                    value={contact.message}
                    onChange={(e) => {
                      setContact({ ...contact, message: e.target.value });
                    }}
                  ></textarea>
                  {errors.message && (
                    <span className="error">{errors.message}</span>
                  )}
                </div>
                <div className="form-group col-md-12">
                  <button>Send Message</button>
                </div>
              </form>
            </div>
            <div className="col-lg-6  ">
              <div className="contacts-info overlay-dark">
                <div class="info-inner">
                  <h4 class="title mb-30">Contact Us For Any Informations</h4>
                  <div class="icon-box">
                    <h6 class="title">
                      <FontAwesomeIcon icon={faMapLocationDot} /> Location
                    </h6>
                    <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                  </div>
                  <div class="icon-box">
                    <h6 class="title">
                      <FontAwesomeIcon icon={faIdCard} />
                      Email &amp; Phone
                    </h6>
                    <a class="text-white" href="/react/contact-us">
                      info@yourdomain.com
                    </a>
                    <p>(+68) 120034509</p>
                  </div>
                  <div class="icon-box">
                    <h6 class="title">
                      <FontAwesomeIcon icon={faGlobe} />
                      Follow Us
                    </h6>
                    <ul class="social-media">
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://twitter.com/"
                        >
                          <FontAwesomeIcon icon={faTwitter} />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.linkedin.com/"
                        >
                          <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                      </li>
                      <li>
                        <a
                          rel="noreferrer"
                          target="_blank"
                          href="https://www.instagram.com/"
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__information">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-30 contact_number">
              <div className="contact_number_inner feature4">
                <div className="icon-md feature-icon">
                  <img src={telephone} alt="telephone" />
                </div>
                <div className="icon-content">
                  <h5 className="ttr-title">Contact Number</h5>
                  <p>+001 1234 45 790</p>
                  <p>+002 3424 44 000</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30 emaail_address">
              <div className="emaail_address_inner">
                <div className="icon-md feature-icon">
                  <img src={email} alt="" />
                </div>
                <div className="icon-content">
                  <h5 className="ttr-title">Email Address</h5>
                  <p>info@yourdomain.com</p>
                  <p>example@support.com</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-30 address">
              <div className="address_inner">
                <div className="icon-md feature-icon">
                  <div className="icon-box"></div>
                  <img src={map} alt="" />
                </div>
                <div className="icon-content">
                  <h5 className="ttr-title">Address</h5>
                  <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          message="Your Message has been submitted successfully!"
          onClose={closeModal}
        />
      )}
    </>
  );
}

export default Contact;
