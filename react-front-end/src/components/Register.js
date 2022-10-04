import React, { useState, useContext } from "react";
import "./Styles-login-reg.css";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const { user, setUser } = useContext(UserContext)

  // function to post user into database and set user context
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);

    if(!name || !email || !password) {
      alert("If you want to start drinking, you need to fill out the form!");
      return;
    }

    fetch("/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json", },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUser(data);
        navigate("/home");
      })
      .catch((err) => console.log(err));

      navigate("/home");
  };

  return (
    <div className="auth-form-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name</label>
        <input
          value={name}
          name="name"
          id="name"
          placeholder="full Name"
          onChange={(e) => setName(e.target.value)}
        />
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
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
