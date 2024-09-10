// src/pages/LoginPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post("/login", { "username": email, password });

      if (response.status === 200) {
        navigate("/dashboard");
      }
    } catch (error) {
      setErrorMessage("Invalid credentials. Please try again.");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
