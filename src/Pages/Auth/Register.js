import React, { useState } from "react";
import "../Styles/login.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="login">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-xl-5 col-lg-6 col-md-8">
            <div className="login-form">
              <div className="text-center mb-4">
                <Link to="/home">
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    placeholder="Enter Name"
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    placeholder="Enter email"
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <input
                    placeholder="Enter Username"
                    type="text"
                    className="form-control"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    className="form-control"
                    placeholder="Enter password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group register-btn">
                  <button type="submit">Register</button>
                </div>
                <div className="form-group ">
                  <p>Already have an account?</p>
                  <Link to="/login" className="form-control btn-register">
                    Login
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
