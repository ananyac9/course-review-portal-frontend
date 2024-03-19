import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Homepage from "./Homepage";
import img2 from "../src/Components/images/main title.png";
import img1 from "../src/Components/images/bg login illustration.png";
import img3 from "../src/Components/images/bglogin.png";
import { params } from "react-router-dom";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setdata] = useState();
  const navigate = useNavigate();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://127.0.0.1:8000/users/login/", {
        email,
        password,
      })
      .then((res) => {
        navigate("/homepage");
      })
      .catch((error) => {
        console.log("Login failed:", error);
      });
    console.log(email);
    console.log(password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="full">
      <img className="img2" src={img2}></img>

      <div className="loginpage">
        <img className="img1" src={img1}></img>
        <form className="form" onSubmit={handleLogin}>
          <label htmlFor="email">LDAP-ID</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={handleEmail}
            name="email"
            placeholder="Enter LDAP-ID here "
          />
          <br />

          <label htmlFor="password">Password</label>

          <input
            id="password"
            name="password"
            type="password"
            value={password}
            onChange={handlePassword}
            placeholder="Enter password here"
          />

          <div id="checkbox">
            <input type="checkbox" /> <p>remember me on the device </p> <br />
          </div>
          <br />
          <button type="submit" className="btn btn-primary2">
            Log in
          </button>

          <h4>
            <Link to="/home" style={{ color: "black", textDecoration: "none" }}>
              Forgot password?
            </Link>
          </h4>
        </form>
      </div>
    </div>
  );
}
