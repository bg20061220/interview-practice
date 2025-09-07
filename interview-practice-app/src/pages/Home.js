import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate() ;
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Welcome to Interview Practice</h1>
      <p>Practice your university interview questions and get feedback!</p>
      {/* Temporary placeholder button */}
      <button
        style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        onClick={() => navigate("/interview")} 
      >
        Start Interview
      </button>
    </div>
  );
}

export default Home;
