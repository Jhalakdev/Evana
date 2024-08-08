"use client";

import { useEffect, useState } from "react";

export default function AdminDashboard() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const response = await fetch("https://evana.onrender.com/api/v1/auth/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Send the token
        },
      });
      const data = await response.json();
      if (data.success) {
        setFeedbacks(data.feedbacks);
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to fetch feedbacks");
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch("https://evana.onrender.com/api/v1/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Send the token
        },
      });

      const data = await response.json();
      if (data.success) {
        localStorage.removeItem("token");
        window.location.href = "/admin/login";
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Failed to log out");
    }
  };

  return (
    <div>
      <nav
        style={{
          width: "100%",
          backgroundColor: "#007bff",
          color: "white",
          padding: "10px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "fixed",
          top: 0,
          zIndex: 1000,
        }}
      >
        <h1 style={{ margin: 0 }}>Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          style={{
            backgroundColor: "white",
            color: "#007bff",
            border: "none",
            padding: "10px 20px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Log Out
        </button>
      </nav>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start", // Align items to the top
          backgroundColor: "#f0f4f8",
          minHeight: "100vh",
          paddingTop: "70px", // To offset the fixed navbar
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            width: "80%",
            marginTop: "50px", // Adjust margin to start from 50px below the navbar
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Feedbacks</h2>
          {error && <p style={{ color: "red", textAlign: "center" }}>{error}</p>}
          {isLoading ? (
            <p style={{ textAlign: "center" }}>Loading...</p>
          ) : (
            <div style={{ overflowX: "auto" }}>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  marginBottom: "20px",
                }}
              >
                <thead>
                  <tr>
                    <th style={tableHeaderStyle}>S.no</th>
                    <th style={tableHeaderStyle}>Name</th>
                    <th style={tableHeaderStyle}>Email</th>
                    <th style={tableHeaderStyle}>Subject</th>
                    <th style={tableHeaderStyle}>Message</th>
                    <th style={tableHeaderStyle}>Created At</th>
                  </tr>
                </thead>
                <tbody>
                  {feedbacks.map((feedback, index) => (
                    <tr key={index}>
                      <td style={tableCellStyle}>{index + 1}</td>
                      <td style={tableCellStyle}>{feedback.name}</td>
                      <td style={tableCellStyle}>{feedback.email}</td>
                      <td style={tableCellStyle}>{feedback.subject}</td>
                      <td style={tableCellStyle}>{feedback.message}</td>
                      <td style={tableCellStyle}>{new Date(feedback.createdAt).toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const tableHeaderStyle = {
  backgroundColor: "#007bff",
  color: "white",
  padding: "10px",
  textAlign: "left",
  borderBottom: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
};
