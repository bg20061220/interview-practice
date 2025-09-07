import { useNavigate } from "react-router-dom";
import React from "react";
import evaluateAnswer from "../utils/evaluate";

function ResultsPage({ answers }) {
  const navigate = useNavigate();
  return (
    <div style={{ maxWidth: "700px", margin: "50px auto", textAlign: "left" }}>
      <h1 style={{ textAlign: "center" }}>Interview Results</h1>

      {answers.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {answers.map((item, idx) => {
            const { score, feedback } = evaluateAnswer(item.question, item.answer);

            return (
              <li
                key={idx}
                style={{
                  marginBottom: "25px",
                  padding: "15px",
                  border: "1px solid #ccc",
                  borderRadius: "8px",
                }}
              >
                <p>
                  <strong>Q:</strong> {item.question}
                </p>
                <p>
                  <strong>A:</strong> {item.answer}
                </p>
                <p>
                  <strong>Score:</strong> {score}
                </p>
                <p>
                  <em>Feedback:</em> {feedback}
                </p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p style={{ textAlign: "center" }}>No answers submitted yet.</p>
      )}

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "10px 20px",
            fontSize: "16px",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
export default ResultsPage ; 