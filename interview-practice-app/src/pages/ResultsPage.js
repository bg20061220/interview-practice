import { useNavigate } from "react-router-dom";

function ResultsPage({ answers }) {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Results Page</h1>

      {answers.length > 0 ? (
        <ul>
          {answers.map((ans, idx) => (
            <li key={idx}>
              <strong>Answer {idx + 1}:</strong> {ans} 
              <br />
              <em>Feedback:</em> {ans.length > 0 ? "Looks good!" : "No answer provided."}
            </li>
          ))}
        </ul>
      ) : (
        <p>No answers submitted yet.</p>
      )}

      <button 
        style={{ marginTop: "20px", padding: "10px 20px" }} 
        onClick={() => navigate("/")}
      >
        Back to Home
      </button>
    </div>
  );
}
export default ResultsPage ; 