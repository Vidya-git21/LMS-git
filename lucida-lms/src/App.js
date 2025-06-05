import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/login";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // rename to general error

  const validateEmail = (email) => {
    // Simple email regex
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (pwd) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
    return regex.test(pwd);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters, include an uppercase letter, a number, and a special character."
      );
      return;
    }

    setErrorMessage("");
    alert(`Logging in with\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              email={email}
              password={password}
              setEmail={setEmail}
              setPassword={setPassword}
              handleLogin={handleLogin}
              errorMessage={errorMessage} // renamed here too
            />
          }
        />
        <Route
          path="/forgot-password"
          element={
            <h2 style={{ textAlign: "center", marginTop: "5rem" }}>
              Forgot Password Page
            </h2>
          }
        />
        <Route
          path="/register"
          element={
            <h2 style={{ textAlign: "center", marginTop: "5rem" }}>
              Register Page
            </h2>
          }
        />
      </Routes>
    </Router>
  );
}
