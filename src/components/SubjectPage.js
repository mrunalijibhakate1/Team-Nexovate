import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SubjectPage = () => {
  const { subjectName } = useParams();
  const navigate = useNavigate();
  const [idealAnswerSheet, setIdealAnswerSheet] = useState(null);

  useEffect(() => {
    const storedSheet = localStorage.getItem(`idealAnswerSheet_${subjectName}`);
    if (storedSheet) setIdealAnswerSheet(storedSheet);
  }, [subjectName]);

  const uploadIdealAnswerSheet = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        localStorage.setItem(`idealAnswerSheet_${subjectName}`, reader.result);
        setIdealAnswerSheet(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <h2>Subject: {subjectName}</h2>
      <input type="file" accept=".pdf" onChange={uploadIdealAnswerSheet} />
      {idealAnswerSheet && <p>✅ Ideal Answer Sheet Uploaded</p>}
      <button onClick={() => navigate(`/subject/${subjectName}/students`)}>📂 Manage Students</button>
    </div>
  );
};

export default SubjectPage;

