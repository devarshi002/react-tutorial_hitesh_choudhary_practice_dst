import { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    const value = e.target.value;
    setName(value);

    if (value.length < 3) {
      setError("Name must be at least 3 char");
    } else {
      setError("");
    }
  };

  const handleSubmit = () => {
    if (!name) {
      setError("Name is required");
    } else if (name.length < 3) {
      setError("minimum 3 char need");
    } else {
      alert("form submitted successfully");
    }
  };

  return (
    <div>
      <h2>Form validation</h2>

      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={handleLogin}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
