import React, { useState } from "react";
import UploadFile from "./UploadFile";
import { evaluateAnswers } from "../utils/evaluateAnswers";

const Evaluate = () => {
  const [idealAnswer, setIdealAnswer] = useState("");
  const [studentAnswer, setStudentAnswer] = useState("");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleEvaluate = async () => {
    if (!idealAnswer || !studentAnswer) {
      alert("Please upload both answer sheets before evaluating.");
      return;
    }

    setLoading(true);
    const evaluation = await evaluateAnswers(idealAnswer, studentAnswer);
    setLoading(false);

    if (evaluation) {
      setResults(evaluation);
    }
  };

  return (
    <div className="container">
      <h2>Evaluate Answer Sheets</h2>

      {/* Upload Ideal Answer Sheet */}
      <UploadFile type="ideal" onUpload={setIdealAnswer} />

      {/* Upload Student Answer Sheet */}
      <UploadFile type="student" onUpload={setStudentAnswer} />

      <button onClick={handleEvaluate} className="btn" disabled={loading}>
        {loading ? "Evaluating..." : "Evaluate"}
      </button>

      {results && (
        <div className="results">
          <h3>Evaluation Results</h3>
          {results.questionWiseScores.map((q, index) => (
            <div key={index}>
              <p>
                <strong>Q{q.question}:</strong> {q.feedback}  
                <span>({q.marksAwarded} marks)</span>
              </p>
            </div>
          ))}
          <h4>Total Marks: {results.totalMarks}</h4>
        </div>
      )}
    </div>
  );
};

export default Evaluate;
