import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
