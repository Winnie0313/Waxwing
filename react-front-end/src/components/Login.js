import React, { useState, useContext } from "react";
import "./Styles-login-reg.css";
import { UserContext } from "./UserContext";
import { useNavigate } from "react-router-dom";
function Login(props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const { user, setUser } = useContext(UserContext)
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
    setUser(email)
    /// to redirect to home page
    navigate("/");
  };

  return (
    <div className="auth-form-container">
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
