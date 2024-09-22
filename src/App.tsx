import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import LandingPage from "./Pages/LandingPage";
import Login from "./Pages/Login";
import Builder from "./Pages/Builder";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
