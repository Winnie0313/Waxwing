import React, { useState, useContext } from "react";
import "./Styles-login-reg.css";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { user, setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // check email and password
    axios
      .post("/api/users/login", {
        email: email,
        password: pass,
      })
      .then((response) => {
        if (response.data.length) {
          setUser(response.data[0]);
          navigate("/");
        } else {
          alert("Please enter correct email or password.");
        }
        console.log("response is: ", response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="auth-form-container form-bg">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default Login;
