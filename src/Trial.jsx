/* eslint-disable no-unused-vars */
import React, { useState } from "react";

const Trial = () => {
  const [email, setEmail] = useState("zinal@ingressit.com");
  const [password, setPassword] = useState("lkRpK1Wx");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://ingress.bizcrmapp.com/api/v1/auth/login", {
        method: "POST", // Usually login endpoints are POST, verify if GET is actually intended
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,  // Adjust the body parameters as needed
          password: password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        // Assuming the token comes in the `token` field
        localStorage.setItem("token", data.token); // Store the token in localStorage
        console.log("Token saved to localStorage:", data.token);
      } else {
        // Handle errors returned from the API
        setError(data.message || "Login failed");
      }
    } catch (error) {
      // Handle network or other errors
      setError("An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button onClick={handleLogin} disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
    </div>
  );
};

export default Trial;
