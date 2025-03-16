import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TeacherDashboard = () => {
  const [subjects, setSubjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedSubjects = JSON.parse(localStorage.getItem("subjects")) || [];
    setSubjects(storedSubjects);
  }, []);

  const addSubject = () => {
    const subjectName = prompt("Enter Subject Name:");
    if (subjectName) {
      const updatedSubjects = [...subjects, subjectName];
      setSubjects(updatedSubjects);
      localStorage.setItem("subjects", JSON.stringify(updatedSubjects));
    }
  };

  return (
    <div>
      <h2>Teacher Dashboard</h2>
      <button onClick={addSubject}>➕ Add Subject</button>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index} onClick={() => navigate(`/subject/${subject}`)}>
            📁 {subject}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeacherDashboard;

