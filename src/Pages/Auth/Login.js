import React, { useState } from "react";
import "../Styles/login.css";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
                  <label>Email</label>
                  <input
                    placeholder="Enter email"
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    className="form-control"
                    placeholder="Enter password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <button type="submit">Login</button>
                  <Link to="/" className="form-control">
                    Forget Password
                  </Link>
                </div>
                <div className="form-group">
                  <p>Dont have any account?</p>
                  <Link to="/register" className="form-control btn-register">
                    Register
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
