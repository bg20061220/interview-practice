import React , {useState} from "react";
import { useNavigate } from "react-router-dom";
function Interview({answers , setAnswers}) {
    const[currentAnswer ,  setCurrentAnswer] = useState("")
    const navigate = useNavigate(); 

    const handleSubmit = () => {
        setAnswers([...answers, currentAnswer]) // add current answers
        setCurrentAnswer("") // clear input
        navigate("/results")
    }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Interview Page</h1>
      <input
        type="text"
        value={currentAnswer}
        onChange={(e) => setCurrentAnswer(e.target.value)}
        placeholder="Type your answer here"
        style={{ padding: "10px", width: "300px" }}
      />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
        Submit Answer
      </button>
    </div>
  );
}

export default Interview;
