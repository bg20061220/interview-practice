const questionKeywords = {
  "Tell me about yourself.": [
    "I", "experience", "study", "skills", "learn", "projects", "interests", "strengths"
  ],
  "Why do you want to study at this university?": [
    "university", "program", "study", "learn", "opportunity", "reputation", "faculty", "career"
  ],
  "What are your strengths and weaknesses?": [
    "strength", "weakness", "improve", "skills", "experience", "challenge", "growth", "adaptable"
  ],
  "Describe a challenge you faced and how you overcame it.": [
    "challenge", "problem", "solution", "learn", "overcome", "team", "mistake", "adapt"
  ],
  "Where do you see yourself in 5 years?": [
    "future", "career", "goal", "study", "plan", "growth", "achievement", "development"
  ]
};

export default function evaluateAnswer(question , answer){
    if(!answer || answer.trim() === ""){
        return { score : 0 , feedback: "No answer provided."}; 
    }
    // Creating a list of keywords based on the question 
    const keywords = questionKeywords[question] || []; 
    let keywordMatches = 0 ;

    // Counting how many keywords are present in the answer 
   keywords.forEach((word) => {
    if (answer.toLowerCase().includes(word.toLowerCase())) {
      keywordMatches += 1;
    }
  });

  // Length bonus 
  if(answer.length> 80 ) keywordMatches += 1 ; 

  // Map total points to a feedback 
   let feedback = " "
if (keywordMatches <= 3) feedback = "Bad answer. Try to include more relevant points.";
  else if (keywordMatches <= 6) feedback = "Good answer. Covers most points, but can be improved.";
  else feedback = "Excellent answer! Clear, detailed, and relevant.";

  return { score: keywordMatches, feedback };}
