import React, { useState } from "react";
import generateAuthId from "../utils/authGenerator";

function AuthForm() {
  const [studentCode, setStudentCode] = useState("");
  const [email, setEmail] = useState("");
  const [problemLink, setProblemLink] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!studentCode || !email) {
      alert("Please enter both Student Code and Email");
      return;
    }

    const authId = generateAuthId(studentCode, email);
    alert(`Generated Authentication ID: ${authId}`);

    try {
      const response = await fetch(
        `https://questionmapping.onrender.com/api/problem/${authId}`
      );
      const data = await response.json();

      if (data.problemLink) {
        setProblemLink(data.problemLink);
        alert(`Problem Link: ${data.problemLink}`);
      } else {
        alert("link not found. Please try again.");
      }
    } catch (error) {
      console.error("Error fetching problem link:", error);
      alert("Failed to fetch problem link.");
    }
  };

  return (
    <div>
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
        <button
          type="submit"
          style={{ padding: "10px 15px", cursor: "pointer" }}
        >
          Generate Auth ID
        </button>
      </form>

      {problemLink && (
        <div style={{ marginTop: "20px" }}>
          <h3>Next Problem Statement:</h3>
          <a href={problemLink} target="_blank" rel="noopener noreferrer">
            {problemLink}
          </a>
        </div>
      )}
    </div>
  );
}

export default AuthForm;
