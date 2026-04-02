import { useState } from "react";

export default function CompleteLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    // Email validation
    if (!form.email) {
      newErrors.email = "Email is required";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Enter valid email";
    }

    // Password validation
    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    // If no errors → success
    if (Object.keys(validationErrors).length === 0) {
      alert("Login Successful ✅");
      console.log(form);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "300px" }}>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        {/* Email */}
        <div>
          <input
            type="text"
            name="email"
            placeholder="Enter email"
            value={form.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p style={{ color: "red" }}>{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p style={{ color: "red" }}>{errors.password}</p>
          )}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}