import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import LogInComponent from "./components/login/loginComponent";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LogInComponent />} />
      </Routes>
    </Router>
  );
};

export default App;
