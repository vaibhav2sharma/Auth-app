import React, { useState } from "react";
import generateAuthId from "../utils/authGenerator";

function AuthForm() {
  const [studentCode, setStudentCode] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!studentCode || !email) {
      alert("Please enter both Student Code and Email");
      return;
    }

    const authId = generateAuthId(studentCode, email);
    alert(`Generated Authentication ID: ${authId}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "inline-block" }}>
      <div>
        <input
          type="text"
          placeholder="Enter Student Code"
          value={studentCode}
          onChange={(e) => setStudentCode(e.target.value)}
          required
          style={{ padding: "10px", margin: "5px", width: "250px" }}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ padding: "10px", margin: "5px", width: "250px" }}
        />
      </div>
      <button type="submit" style={{ padding: "10px 15px", cursor: "pointer" }}>
        Generate Auth ID
      </button>
    </form>
  );
}

export default AuthForm;
