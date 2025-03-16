import { evaluateAnswers } from "../utils/geminiApi";

const handleEvaluate = async () => {
  const idealSheet = localStorage.getItem(`idealAnswerSheet_${subjectName}`);
  const studentSheet = localStorage.getItem(`studentAnswerSheet_${subjectName}_${studentName}`);

  if (!idealSheet || !studentSheet) {
    alert("❌ Please upload both answer sheets first!");
    return;
  }

  console.log("📤 Sending Sheets to Gemini...");
  const result = await evaluateAnswers(idealSheet, studentSheet);

  if (result) {
    console.log("✅ Received Evaluation:", result);
    localStorage.setItem(`evaluation_${subjectName}_${studentName}`, JSON.stringify(result));
    alert("📊 Evaluation Saved!");
  } else {
    alert("⚠️ Evaluation Failed! Check API Key & Network.");
  }
};

