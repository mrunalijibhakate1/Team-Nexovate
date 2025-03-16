import React, { useState, useEffect } from "react";

const SubjectFolder = ({ subjectName }) => {
  const [students, setStudents] = useState([]);
  const [idealAnswerSheet, setIdealAnswerSheet] = useState(null);

  // Load students & ideal answer sheet from localStorage on mount
  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem(`students_${subjectName}`)) || [];
    setStudents(savedStudents);

    const savedSheet = localStorage.getItem(`idealAnswerSheet_${subjectName}`);
    if (savedSheet) {
      setIdealAnswerSheet(savedSheet);
    }
  }, [subjectName]);

  // Add a new student folder
  const addStudent = () => {
    const studentName = prompt("Enter Student Name:");
    if (studentName) {
      const updatedStudents = [...students, studentName];
      setStudents(updatedStudents);
      localStorage.setItem(`students_${subjectName}`, JSON.stringify(updatedStudents));
    }
  };

  // Upload & Save Ideal Answer Sheet
  const uploadIdealSheet = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileData = e.target.result;
        localStorage.setItem(`idealAnswerSheet_${subjectName}`, fileData);
        setIdealAnswerSheet(fileData);
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <h2>{subjectName} - Student Folders</h2>

      {/* Upload Ideal Answer Sheet */}
      <h3>Upload Ideal Answer Sheet:</h3>
      <input type="file" onChange={uploadIdealSheet} />
      {idealAnswerSheet && <p>✅ Ideal Answer Sheet Uploaded!</p>}

      <br />

      {/* Add & View Student Folders */}
      <button onClick={addStudent}>➕ Add Student</button>
      <ul>
        {students.map((student) => (
          <li key={student}>
            <a href={`/student/${subjectName}/${student}`}>{student}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubjectFolder;
