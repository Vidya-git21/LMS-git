import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./component/Register";
import "./App.css";
const Login = () => (
  <div style={{ padding: 20 }}>
    <h2>Login Page (Placeholder)</h2>
    <p>This is where your login form would go.</p>
    <a href="/register">Go to Register</a>
  </div>
);

const App = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const roles = ["Admin / HR", "Manager", "Trainee/ Learner"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (name === "password") setPasswordError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.email || !form.password || !form.role) {
      alert("Please fill in all fields.");
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!passwordPattern.test(form.password)) {
      setPasswordError(
        "Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
      );
      return;
    }

    alert(
      `Registered successfully!\nUsername: ${form.username}\nEmail: ${form.email}\nRole: ${form.role}`
    );
    console.log("Form data:", form);

    setForm({ username: "", email: "", password: "", role: "" });
    setPasswordError("");
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/register"
          element={
            <Register
              form={form}
              passwordError={passwordError}
              roles={roles}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          }
        />
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Navigate to="/register" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
