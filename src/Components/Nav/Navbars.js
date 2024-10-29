import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import "./navStyle.css";
import logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import {
  faArrowRight,
  faPhone,
  faSearch,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
export default function Navbars() {
  const [isFixed, setIsFixed] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [show, setShow] = useState({
    one: false,
    two: false,
    three: false,
  });

  const showDropdown = (e) => {
    setShow({ ...show, [e.target.id]: !show[e.target.id] });
    setShow(!show);
    if (e.target.id === "one") {
      setShow({
        ...show,
        [e.target.id]: !show[e.target.id],
        two: false,
        three: false,
      });
    }
    if (e.target.id === "two") {
      setShow({
        ...show,
        [e.target.id]: !show[e.target.id],
        one: false,
        three: false,
      });
    }
    if (e.target.id === "three") {
      setShow({
        ...show,
        [e.target.id]: !show[e.target.id],
        one: false,
        two: false,
      });
    }
    console.log(e.target.id);
  };
  const hideDropdown = (e) => {
    setShow(false);
    if (e.target.id === "") {
      setShow({ ...show, one: false, two: false, three: false });
    }
    if (e.target.id === "one") {
      setShow({ ...show, one: false });
    } else if (e.target.id === "two") {
      setShow({ ...show, two: false });
    } else if (e.target.id === "three") {
      setShow({ ...show, three: false });
    }
  };

  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={`navbar ${isFixed ? "fixed" : ""}`}
      >
        <Container>
          <Navbar.Brand href="#home" style={{ marginRight: "200px" }}>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to={"/home"} className="active" href="#home">
                Home
              </Link>
              <NavDropdown
                title="Pages"
                id="one"
                show={show.one}
                onMouseEnter={showDropdown}
                onMouseOut={(e) => {
                  setShow({ ...show, one: false });
                }}
                toggle={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
              >
                <NavDropdown.Item href="#action/3.1">About Us</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Our Team</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">FAQ's</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  <Link to="/booking">Booking </Link>
                </NavDropdown.Item>

                <NavDropdown.Item href="#action/3.2">
                  <Link to="/login">Login / Signup </Link>
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Services"
                id="two"
                show={show.two}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item href="#action/3.1">Services</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Services Detail
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                title="Blog"
                id="three"
                show={show.three}
                onMouseEnter={showDropdown}
                onMouseLeave={hideDropdown}
              >
                <NavDropdown.Item href="#action/3.1">Blogs</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Blogs Details
                </NavDropdown.Item>
              </NavDropdown>
              <Link to={"/contact"} href="#contact">
                Contact Us
              </Link>
              <Nav.Link href="#pricing">
                <i className="search-icon">
                  <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </i>
              </Nav.Link>
              <Link to={"/contact"} href="#about">
                <button>
                  Contact us
                  <span>
                    <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                  </span>
                </button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
