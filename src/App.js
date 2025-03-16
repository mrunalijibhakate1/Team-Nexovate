import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TeacherDashboard from "./components/TeacherDashboard";
import SubjectFolder from "./components/SubjectFolder";
import StudentFolder from "./components/StudentFolder";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/dashboard" element={<TeacherDashboard />} />
        <Route path="/subject/:subjectName" element={<SubjectFolder />} />
        <Route path="/student/:subjectName/:studentName" element={<StudentFolder />} />
      </Routes>
    </Router>
  );
}

export default App;
