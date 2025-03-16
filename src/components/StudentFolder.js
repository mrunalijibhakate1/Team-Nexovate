import React, { useState, useEffect } from "react";

const StudentFolder = ({ subjectName, studentName }) => {
  const [studentAnswerSheet, setStudentAnswerSheet] = useState(null);
  const [idealAnswerSheet, setIdealAnswerSheet] = useState(null);

  // Load the stored student answer sheet & ideal answer sheet
  useEffect(() => {
    const savedStudentSheet = localStorage.getItem(`studentAnswerSheet_${subjectName}_${studentName}`);
    if (savedStudentSheet) {
      setStudentAnswerSheet(savedStudentSheet);
    }

    const savedIdealSheet = localStorage.getItem(`idealAnswerSheet_${subjectName}`);
    if (savedIdealSheet) {
      setIdealAnswerSheet(savedIdealSheet);
    }
  }, [subjectName, studentName]);

  // Upload & Save Student Answer Sheet
  const uploadStudentSheet = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileData = e.target.result;
        localStorage.setItem(`studentAnswerSheet_${subjectName}_${studentName}`, fileData);
        setStudentAnswerSheet(fileData);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <h2>Student: {studentName}</h2>

      {/* Show Ideal Answer Sheet */}
      <h3>Ideal Answer Sheet:</h3>
      {idealAnswerSheet ? <p>✅ Ideal Answer Sheet Available</p> : <p>⚠️ No Ideal Answer Sheet Uploaded</p>}

      {/* Upload Student Answer Sheet */}
      <h3>Upload Student Answer Sheet:</h3>
      <input type="file" onChange={uploadStudentSheet} />
      {studentAnswerSheet && <p>✅ Student Answer Sheet Uploaded!</p>}
    </div>
  );
};

export default StudentFolder;



