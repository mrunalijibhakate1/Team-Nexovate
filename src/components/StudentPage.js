import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const StudentPage = () => {
  const { subjectName, studentName } = useParams();
  const [studentAnswerSheet, setStudentAnswerSheet] = useState(null);

  useEffect(() => {
    const storedSheet = localStorage.getItem(`studentAnswerSheet_${subjectName}_${studentName}`);
    if (storedSheet) setStudentAnswerSheet(storedSheet);
  }, [subjectName, studentName]);

  const uploadStudentAnswerSheet = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem(`studentAnswerSheet_${subjectName}_${studentName}`, reader.result);
        setStudentAnswerSheet(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>Student: {studentName} (Subject: {subjectName})</h2>
      <input type="file" accept=".pdf" onChange={uploadStudentAnswerSheet} />
      {studentAnswerSheet && <p>✅ Student Answer Sheet Uploaded</p>}
    </div>
  );
};

export default StudentPage;
