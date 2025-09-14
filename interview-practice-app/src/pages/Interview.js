import React , {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import questions from "../utils/questionData";

function Interview({answers , setAnswers}) {
    const[currentAnswer ,  setCurrentAnswer] = useState("");
    const [question , setQuestion] = useState("");
    const navigate = useNavigate(); 

    useEffect(() => {
    const randomIndex = Math.floor(Math.random() * questions.length);
    setQuestion(questions[randomIndex]);
    }, []);
    const handleSubmit = () => {
        console.log(currentAnswer)
         setAnswers([
      ...answers, 
      { question: question, answer: currentAnswer } // store both questions and answers
    ]);
        setCurrentAnswer("") // clear input
        navigate("/results")
    }
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Interview Page</h1>
      <p> <strong>Question : </strong> {question} </p>
        <textarea
        value={currentAnswer}
        onChange={(e) => setCurrentAnswer(e.target.value)}
        placeholder="Type your answer here..."
      />
      <br />
      <button onClick={handleSubmit} style={{ marginTop: "20px" }}>
        Submit Answer
      </button>
    </div>
  );
}

export default Interview;
