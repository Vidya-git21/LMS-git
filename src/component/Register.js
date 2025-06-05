import React from "react";

const Register = ({
  form,
  passwordError,
  roles,
  handleChange,
  handleSubmit,
}) => {
  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        <h2>Register</h2>

        <label>Username</label>
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          className="input"
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="input"
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          className="input"
        />
        {passwordError && (
          <p className="error" style={{ color: "red", marginTop: "10px" }}>
            {passwordError}
          </p>
        )}

        <label>Role</label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          className="input"
        >
          <option value="">Select Role</option>
          {roles.map((role, idx) => (
            <option key={idx} value={role}>
              {role}
            </option>
          ))}
        </select>

        <button type="submit" className="button">
          Register
        </button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
