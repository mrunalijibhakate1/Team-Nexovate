import axios from "axios";

const GEMINI_API_KEY = "YOUR_GEMINI_API_KEY"; // 🔹 Replace with your actual API key
const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateText";

export const evaluateAnswers = async (idealAnswer, studentAnswer) => {
  const prompt = `
    Compare the student's answers with the ideal answer sheet.
    - Identify question numbers and their correct answers.
    - Compare with the student's response.
    - Provide question-wise scoring.
    - Generate short, smart feedback.

    📌 **Ideal Answer Sheet:**
    ${idealAnswer}

    📝 **Student Answer Sheet:**
    ${studentAnswer}

    🎯 **Output Format:**
    {
      "question_wise_scores": [
        {"question": 1, "score": "4/5", "feedback": "Good attempt, but missed one key point"},
        {"question": 2, "score": "3/5", "feedback": "Explain more details about XYZ"}
      ],
      "total_score": "70%"
    }
  `;

  try {
    const response = await axios.post(GEMINI_ENDPOINT, {
      prompt: { text: prompt },
    }, {
      headers: { "Content-Type": "application/json", "x-goog-api-key": GEMINI_API_KEY },
    });

    return response.data;
  } catch (error) {
    console.error("❌ Gemini API Error:", error);
    return null;
  }
};
